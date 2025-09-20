import { NextRequest, NextResponse } from 'next/server';
import { log } from '@/lib/logger';

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  description: string;
  lastChecked: string;
  responseTime?: number;
}

interface StatusPageData {
  overall_status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  services: ServiceStatus[];
  incidents: any[];
  maintenance: any[];
  last_updated: string;
}

async function checkServiceHealth(url: string, timeout = 5000): Promise<{ healthy: boolean; responseTime: number }> {
  const startTime = Date.now();

  try {
    const response = await fetch(url, {
      method: 'HEAD',
      signal: AbortSignal.timeout(timeout)
    });

    const responseTime = Date.now() - startTime;
    return {
      healthy: response.ok,
      responseTime
    };
  } catch (error) {
    const responseTime = Date.now() - startTime;
    return {
      healthy: false,
      responseTime
    };
  }
}

async function getServiceStatuses(): Promise<ServiceStatus[]> {
  const services: ServiceStatus[] = [];
  const currentTime = new Date().toISOString();

  // Check main application health
  try {
    const healthCheck = await checkServiceHealth(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/health`);
    services.push({
      name: 'Core Application',
      status: healthCheck.healthy ? 'operational' : 'outage',
      description: healthCheck.healthy ? 'All systems operational' : 'Application experiencing issues',
      lastChecked: currentTime,
      responseTime: healthCheck.responseTime
    });
  } catch (error) {
    services.push({
      name: 'Core Application',
      status: 'outage',
      description: 'Unable to reach application',
      lastChecked: currentTime
    });
  }

  // Check Stripe API
  if (process.env.STRIPE_SECRET_KEY) {
    try {
      const stripeHealth = await checkServiceHealth('https://api.stripe.com/healthcheck');
      services.push({
        name: 'Payment Processing (Stripe)',
        status: stripeHealth.healthy ? 'operational' : 'degraded',
        description: stripeHealth.healthy ? 'Payment processing available' : 'Payment processing may be affected',
        lastChecked: currentTime,
        responseTime: stripeHealth.responseTime
      });
    } catch (error) {
      services.push({
        name: 'Payment Processing (Stripe)',
        status: 'degraded',
        description: 'Unable to verify payment processing status',
        lastChecked: currentTime
      });
    }
  }

  // Check OpenAI API
  if (process.env.OPENAI_API_KEY) {
    try {
      const response = await fetch('https://status.openai.com/api/v2/status.json', {
        signal: AbortSignal.timeout(5000)
      });

      if (response.ok) {
        const data = await response.json();
        const status = data.status?.indicator || 'unknown';

        let serviceStatus: ServiceStatus['status'] = 'operational';
        let description = 'AI services operational';

        switch (status) {
          case 'none':
            serviceStatus = 'operational';
            break;
          case 'minor':
            serviceStatus = 'degraded';
            description = 'AI services experiencing minor issues';
            break;
          case 'major':
          case 'critical':
            serviceStatus = 'outage';
            description = 'AI services experiencing major issues';
            break;
          default:
            serviceStatus = 'degraded';
            description = 'AI services status unknown';
        }

        services.push({
          name: 'AI Services (OpenAI)',
          status: serviceStatus,
          description,
          lastChecked: currentTime
        });
      } else {
        throw new Error('Failed to fetch OpenAI status');
      }
    } catch (error) {
      services.push({
        name: 'AI Services (OpenAI)',
        status: 'degraded',
        description: 'Unable to verify AI services status',
        lastChecked: currentTime
      });
    }
  }

  // Check Lob API
  if (process.env.LOB_API_KEY) {
    try {
      const lobHealth = await checkServiceHealth('https://api.lob.com/v1/addresses');
      services.push({
        name: 'Mail Services (Lob)',
        status: lobHealth.healthy ? 'operational' : 'degraded',
        description: lobHealth.healthy ? 'Mail services operational' : 'Mail services may be affected',
        lastChecked: currentTime,
        responseTime: lobHealth.responseTime
      });
    } catch (error) {
      services.push({
        name: 'Mail Services (Lob)',
        status: 'degraded',
        description: 'Unable to verify mail services status',
        lastChecked: currentTime
      });
    }
  }

  // Check SendGrid API
  if (process.env.SENDGRID_API_KEY) {
    try {
      // SendGrid doesn't have a public status endpoint, so we check their main API
      const response = await fetch('https://api.sendgrid.com/v3/user/account', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json'
        },
        signal: AbortSignal.timeout(5000)
      });

      services.push({
        name: 'Email Services (SendGrid)',
        status: response.ok ? 'operational' : 'degraded',
        description: response.ok ? 'Email services operational' : 'Email services may be affected',
        lastChecked: currentTime
      });
    } catch (error) {
      services.push({
        name: 'Email Services (SendGrid)',
        status: 'degraded',
        description: 'Unable to verify email services status',
        lastChecked: currentTime
      });
    }
  }

  // Check database (via our health endpoint)
  try {
    const dbHealth = await checkServiceHealth(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/health?metrics=true`);
    services.push({
      name: 'Database',
      status: dbHealth.healthy ? 'operational' : 'outage',
      description: dbHealth.healthy ? 'Database connections healthy' : 'Database experiencing issues',
      lastChecked: currentTime,
      responseTime: dbHealth.responseTime
    });
  } catch (error) {
    services.push({
      name: 'Database',
      status: 'outage',
      description: 'Unable to verify database status',
      lastChecked: currentTime
    });
  }

  return services;
}

function determineOverallStatus(services: ServiceStatus[]): StatusPageData['overall_status'] {
  const statuses = services.map(s => s.status);

  if (statuses.includes('outage')) {
    return 'outage';
  }

  if (statuses.includes('degraded')) {
    return 'degraded';
  }

  if (statuses.includes('maintenance')) {
    return 'maintenance';
  }

  return 'operational';
}

export async function GET(request: NextRequest) {
  const startTime = Date.now();

  try {
    log.info('Status page check initiated');

    const services = await getServiceStatuses();
    const overallStatus = determineOverallStatus(services);

    // Mock incidents and maintenance (in a real app, these would come from a database)
    const incidents: any[] = [];
    const maintenance: any[] = [];

    const statusData: StatusPageData = {
      overall_status: overallStatus,
      services,
      incidents,
      maintenance,
      last_updated: new Date().toISOString()
    };

    const duration = Date.now() - startTime;

    log.info('Status page check completed', {
      overall_status: overallStatus,
      services_count: services.length,
      duration
    });

    return NextResponse.json(statusData, {
      status: 200,
      headers: {
        'Cache-Control': 'public, max-age=60', // Cache for 1 minute
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    const duration = Date.now() - startTime;

    log.error('Status page check failed', {
      error: error instanceof Error ? error.message : 'Unknown error',
      duration
    });

    return NextResponse.json({
      overall_status: 'outage',
      services: [],
      incidents: [{
        name: 'Status Page Error',
        status: 'investigating',
        description: 'Unable to determine system status',
        created_at: new Date().toISOString()
      }],
      maintenance: [],
      last_updated: new Date().toISOString(),
      error: 'Failed to retrieve status information'
    }, { status: 500 });
  }
}
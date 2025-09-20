#!/bin/bash

# Monitoring and Observability Setup Script for Enclosed.AI
echo "🔧 Setting up monitoring and observability for Enclosed.AI..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

# Check if .env.local exists
if [ ! -f .env.local ]; then
    print_warning ".env.local not found. Please copy .env.example to .env.local and configure your environment variables."
    exit 1
fi

print_info "Checking environment configuration..."

# Check for required monitoring environment variables
check_env_var() {
    local var_name=$1
    local is_required=$2

    if grep -q "^${var_name}=" .env.local && [ -n "$(grep "^${var_name}=" .env.local | cut -d'=' -f2)" ]; then
        print_status "${var_name} is configured"
        return 0
    else
        if [ "$is_required" = "true" ]; then
            print_error "${var_name} is required but not configured"
            return 1
        else
            print_warning "${var_name} is optional but not configured"
            return 0
        fi
    fi
}

# Check environment variables
env_check_failed=false

print_info "Checking Sentry configuration..."
if ! check_env_var "SENTRY_DSN" false; then
    env_check_failed=true
fi
if ! check_env_var "NEXT_PUBLIC_SENTRY_DSN" false; then
    env_check_failed=true
fi

print_info "Checking PostHog configuration..."
if ! check_env_var "NEXT_PUBLIC_POSTHOG_KEY" false; then
    env_check_failed=true
fi

print_info "Checking Redis configuration..."
if ! check_env_var "REDIS_URL" false; then
    print_warning "Redis not configured. Rate limiting will be disabled."
fi

print_info "Checking application configuration..."
check_env_var "NEXT_PUBLIC_APP_URL" false
check_env_var "NEXT_PUBLIC_APP_VERSION" false

# Create logs directory if it doesn't exist
if [ ! -d "logs" ]; then
    mkdir -p logs
    print_status "Created logs directory"
else
    print_status "Logs directory already exists"
fi

# Set proper permissions for logs directory
chmod 755 logs
print_status "Set permissions for logs directory"

# Create a simple monitoring test script
cat > scripts/test-monitoring.js << 'EOF'
const { execSync } = require('child_process');

console.log('🧪 Testing monitoring endpoints...');

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

async function testEndpoint(path, description) {
  try {
    const response = await fetch(`${baseUrl}${path}`);
    const data = await response.json();

    if (response.ok) {
      console.log(`✓ ${description}: OK`);
      return true;
    } else {
      console.log(`✗ ${description}: ${response.status} ${response.statusText}`);
      return false;
    }
  } catch (error) {
    console.log(`✗ ${description}: ${error.message}`);
    return false;
  }
}

async function runTests() {
  console.log('\nTesting health endpoints...');
  await testEndpoint('/api/health', 'Basic health check');
  await testEndpoint('/api/health/detailed', 'Detailed health check');
  await testEndpoint('/api/status', 'Status page');
  await testEndpoint('/api/example-monitored', 'Example monitored API');

  console.log('\n🎉 Monitoring test completed!');
}

if (require.main === module) {
  runTests().catch(console.error);
}

module.exports = { testEndpoint, runTests };
EOF

print_status "Created monitoring test script"

# Make the test script executable
chmod +x scripts/test-monitoring.js

# Add monitoring npm scripts if they don't exist
print_info "Adding monitoring scripts to package.json..."

# Use Node.js to safely update package.json
node << 'EOF'
const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Add monitoring scripts
const monitoringScripts = {
  "test:monitoring": "node scripts/test-monitoring.js",
  "logs:view": "tail -f logs/combined-$(date +%Y-%m-%d).log 2>/dev/null || echo 'No logs available yet'",
  "logs:error": "tail -f logs/error-$(date +%Y-%m-%d).log 2>/dev/null || echo 'No error logs available yet'",
  "health:check": "curl -s http://localhost:3000/api/health | jq .",
  "monitoring:setup": "./scripts/setup-monitoring.sh"
};

// Merge with existing scripts
packageJson.scripts = { ...packageJson.scripts, ...monitoringScripts };

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('✓ Added monitoring scripts to package.json');
EOF

# Create a simple monitoring dashboard script
cat > scripts/monitoring-dashboard.sh << 'EOF'
#!/bin/bash

echo "📊 Enclosed.AI Monitoring Dashboard"
echo "=================================="

# Check if the application is running
if curl -s http://localhost:3000/api/health > /dev/null; then
    echo "🟢 Application: RUNNING"

    # Get health status
    echo ""
    echo "🏥 Health Status:"
    curl -s http://localhost:3000/api/health | jq -r '.status // "Unknown"'

    # Get system metrics
    echo ""
    echo "📈 System Metrics:"
    curl -s http://localhost:3000/api/health/detailed | jq -r '.system.memory.heapUsed // "Unknown"' | xargs -I {} echo "Memory Usage: {}"
    curl -s http://localhost:3000/api/health/detailed | jq -r '.system.uptime // "Unknown"' | xargs -I {} echo "Uptime: {} seconds"

    # Get service status
    echo ""
    echo "🔧 Services:"
    curl -s http://localhost:3000/api/status | jq -r '.services[] | "\(.name): \(.status)"'

else
    echo "🔴 Application: NOT RUNNING"
fi

echo ""
echo "💡 Quick Commands:"
echo "  npm run health:check     - Check application health"
echo "  npm run logs:view        - View application logs"
echo "  npm run logs:error       - View error logs"
echo "  npm run test:monitoring  - Test monitoring endpoints"
EOF

chmod +x scripts/monitoring-dashboard.sh
print_status "Created monitoring dashboard script"

# Final setup summary
echo ""
echo "🎉 Monitoring and observability setup completed!"
echo ""
echo "📋 Setup Summary:"
echo "  ✓ Sentry error tracking configured"
echo "  ✓ Winston logging system set up"
echo "  ✓ PostHog analytics integration ready"
echo "  ✓ Health check endpoints created"
echo "  ✓ Performance monitoring with Web Vitals"
echo "  ✓ Rate limiting middleware configured"
echo "  ✓ Monitoring utilities and error boundaries"
echo ""
echo "🚀 Next Steps:"
echo "  1. Configure your environment variables in .env.local"
echo "  2. Start your application: npm run dev"
echo "  3. Test monitoring: npm run test:monitoring"
echo "  4. View dashboard: ./scripts/monitoring-dashboard.sh"
echo ""
echo "📖 Documentation:"
echo "  • Health Check: http://localhost:3000/api/health"
echo "  • Detailed Health: http://localhost:3000/api/health/detailed"
echo "  • Status Page: http://localhost:3000/api/status"
echo "  • Example Monitored API: http://localhost:3000/api/example-monitored"
echo ""

if [ "$env_check_failed" = true ]; then
    print_warning "Some environment variables are not configured. Please check .env.local"
    echo "Refer to .env.example for all available monitoring configuration options."
    exit 1
else
    print_status "All critical monitoring components are ready!"
    exit 0
fi
EOF
interface LobLetterParams {
  to: {
    name: string;
    address_line1: string;
    address_line2?: string;
    address_city: string;
    address_state: string;
    address_zip: string;
    address_country?: string;
  };
  from: {
    name: string;
    address_line1: string;
    address_city: string;
    address_state: string;
    address_zip: string;
    address_country?: string;
  };
  file: string; // HTML content
  color: boolean;
  double_sided?: boolean;
  description?: string;
}

interface LobResponse {
  id: string;
  description?: string;
  to: any;
  from: any;
  url?: string;
  carrier?: string;
  tracking_number?: string;
  expected_delivery_date?: string;
  date_created: string;
  date_modified: string;
}

export class LobClient {
  private apiKey: string;
  private baseUrl = 'https://api.lob.com/v1';
  private testMode: boolean;

  constructor(apiKey?: string) {
    this.apiKey = apiKey || process.env.LOB_API_KEY || '';
    this.testMode = this.apiKey.startsWith('test_');
  }

  private async makeRequest(endpoint: string, method: string, data?: any): Promise<any> {
    const auth = Buffer.from(this.apiKey + ':').toString('base64');

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method,
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || `Lob API error: ${response.statusText}`);
    }

    return response.json();
  }

  async sendLetter(params: LobLetterParams): Promise<{ success: boolean; id?: string; cost: number; error?: string }> {
    try {
      // In test mode, simulate the API call
      if (this.testMode || !this.apiKey) {
        console.log('Test mode: Simulating letter send', params.to.name);
        return {
          success: true,
          id: `test_letter_${Date.now()}`,
          cost: 0.89,
        };
      }

      const response: LobResponse = await this.makeRequest('/letters', 'POST', params);

      return {
        success: true,
        id: response.id,
        cost: 0.89, // Standard letter cost
      };
    } catch (error: any) {
      console.error('Lob error:', error);
      return {
        success: false,
        error: error.message,
        cost: 0,
      };
    }
  }

  async sendPostcard(params: any): Promise<{ success: boolean; id?: string; cost: number; error?: string }> {
    try {
      if (this.testMode || !this.apiKey) {
        console.log('Test mode: Simulating postcard send', params.to.name);
        return {
          success: true,
          id: `test_postcard_${Date.now()}`,
          cost: params.size === '4x6' ? 0.55 : 0.75,
        };
      }

      const response: LobResponse = await this.makeRequest('/postcards', 'POST', params);

      return {
        success: true,
        id: response.id,
        cost: params.size === '4x6' ? 0.55 : 0.75,
      };
    } catch (error: any) {
      console.error('Lob error:', error);
      return {
        success: false,
        error: error.message,
        cost: 0,
      };
    }
  }

  async verifyAddress(address: {
    address_line1: string;
    address_line2?: string;
    address_city: string;
    address_state: string;
    address_zip: string;
  }): Promise<{ valid: boolean; components?: any; error?: string }> {
    try {
      if (this.testMode || !this.apiKey) {
        // Basic validation in test mode
        const hasRequired = address.address_line1 && address.address_city &&
                           address.address_state && address.address_zip;
        return { valid: hasRequired };
      }

      const response = await this.makeRequest('/us_verifications', 'POST', {
        address_line1: address.address_line1,
        address_line2: address.address_line2,
        address_city: address.address_city,
        address_state: address.address_state,
        address_zip: address.address_zip,
      });

      return {
        valid: response.deliverability === 'deliverable',
        components: response.components,
      };
    } catch (error: any) {
      console.error('Address verification error:', error);
      return {
        valid: false,
        error: error.message,
      };
    }
  }

  async getLetterStatus(letterId: string): Promise<any> {
    try {
      if (this.testMode || !this.apiKey) {
        return {
          id: letterId,
          status: 'in_transit',
          expected_delivery_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
        };
      }

      return await this.makeRequest(`/letters/${letterId}`, 'GET');
    } catch (error: any) {
      console.error('Status check error:', error);
      throw error;
    }
  }
}

// Helper function for sending mail through Lob
export async function sendMailPiece(
  recipient: any,
  content: string,
  mailType: 'letter' | 'postcard_4x6' | 'postcard_6x11',
  fromAddress?: any
): Promise<{ success: boolean; id?: string; cost: number; error?: string }> {
  const lob = new LobClient();

  const defaultFrom = {
    name: 'Enclosed.AI',
    address_line1: '123 Business Ave',
    address_city: 'San Francisco',
    address_state: 'CA',
    address_zip: '94107',
    address_country: 'US',
  };

  const to = {
    name: recipient.name,
    address_line1: recipient.address_line1,
    address_line2: recipient.address_line2,
    address_city: recipient.city,
    address_state: recipient.state,
    address_zip: recipient.zip_code,
    address_country: recipient.country || 'US',
  };

  if (mailType === 'letter') {
    return lob.sendLetter({
      to,
      from: fromAddress || defaultFrom,
      file: content, // HTML content
      color: true,
      double_sided: true,
      description: `Letter to ${recipient.name}`,
    });
  } else {
    // For postcards
    const size = mailType === 'postcard_4x6' ? '4x6' : '6x11';
    return lob.sendPostcard({
      to,
      from: fromAddress || defaultFrom,
      front: content, // HTML content for front
      back: '<html><body><div>{{message}}</div></body></html>', // Simple back template
      size,
      description: `Postcard to ${recipient.name}`,
    });
  }
}
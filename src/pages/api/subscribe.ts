import type { APIRoute } from 'astro';

const MAILERLITE_API_KEY = import.meta.env.MAILERLITE_API_KEY;
const MAILERLITE_GROUP_ID = import.meta.env.MAILERLITE_GROUP_ID || 'default';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email, firstName, consent } = body;

    // Validate required fields
    if (!email) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Email is required' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!consent) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Consent is required' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check if MailerLite API key is configured
    if (!MAILERLITE_API_KEY) {
      console.error('MAILERLITE_API_KEY is not configured');
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Newsletter service is not configured. Please try again later.' 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Prepare subscriber data for MailerLite
    const subscriberData = {
      email: email.toLowerCase().trim(),
      fields: {
        name: firstName?.trim() || '',
        last_name: '', // MailerLite field
      },
      groups: [MAILERLITE_GROUP_ID],
      status: 'active', // or 'unconfirmed' if you want double opt-in
      subscribed_at: new Date().toISOString(),
      ip_address: request.headers.get('x-forwarded-for') || 
                  request.headers.get('x-real-ip') || 
                  'unknown',
    };

    // Make request to MailerLite API
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
        'Accept': 'application/json',
      },
      body: JSON.stringify(subscriberData),
    });

    const responseData = await response.json();

    if (response.ok) {
      // Success - subscriber was added or already exists
      console.log('MailerLite subscription success:', responseData);
      
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Successfully subscribed to newsletter!' 
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
      
    } else {
      // Handle MailerLite API errors
      console.error('MailerLite API error:', response.status, responseData);
      
      // Check for specific error cases
      if (response.status === 422 && responseData.errors?.email) {
        const emailErrors = responseData.errors.email;
        if (emailErrors.includes('The email has already been taken.')) {
          return new Response(JSON.stringify({ 
            success: false, 
            message: 'This email is already subscribed to our newsletter.' 
          }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
          });
        }
        
        if (emailErrors.includes('The email field is required.') || 
            emailErrors.includes('The email must be a valid email address.')) {
          return new Response(JSON.stringify({ 
            success: false, 
            message: 'Please provide a valid email address.' 
          }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      }
      
      // Generic error response
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Failed to subscribe. Please try again later.' 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
  } catch (error) {
    console.error('Subscription API error:', error);
    
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'An unexpected error occurred. Please try again later.' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

// Optional: Handle GET requests to return API info
export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ 
    message: 'Newsletter subscription API endpoint',
    method: 'POST',
    requiredFields: ['email', 'consent'],
    optionalFields: ['firstName']
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
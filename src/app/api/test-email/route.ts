import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const apiKey = process.env.SENDGRID_API_KEY;
  const fromEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'engqusaykhudair@gmail.com';

  if (!apiKey) {
    return NextResponse.json({ error: 'SENDGRID_API_KEY is not configured.' }, { status: 500 });
  }

  try {
    const { to } = await request.json();

    if (!to) {
      return NextResponse.json({ error: 'Missing "to" email address in body.' }, { status: 400 });
    }

    const payload = {
      personalizations: [
        {
          to: [{ email: to }],
          subject: 'Test Email from Next.js (SendGrid)',
        },
      ],
      from: { email: fromEmail },
      content: [
        {
          type: 'text/plain',
          value: 'Hello! This is a test email sent directly from your Next.js project using SendGrid API. The settings are working perfectly!',
        },
      ],
    };

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return NextResponse.json({ success: true, message: 'Email sent successfully via SendGrid API!' });
    } else {
      const errorData = await response.json().catch(() => null);
      console.error('SendGrid Error:', errorData);
      return NextResponse.json({ 
        success: false, 
        error: 'SendGrid rejected the email.', 
        details: errorData 
      }, { status: response.status });
    }
  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

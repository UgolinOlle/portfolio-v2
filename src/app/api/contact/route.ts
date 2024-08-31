import { NextRequest, NextResponse } from 'next/server';

import { sendMail } from '@/lib/mailer';
import { contactFormSchema } from '@/lib/schemas/contact';

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const data = await request.json();
    const parsedData = contactFormSchema.parse(data);

    await sendMail(
      'hello@ugolin-olle.com',
      `New message from ${parsedData.firstName} ${parsedData.lastName}`,
      parsedData.message
    );
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('error', error);
    return NextResponse.json(
      { error: 'An error occurred while sending the email' },
      { status: 500 }
    );
  }
}

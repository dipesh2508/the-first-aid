import { NextResponse } from "next/server";
import { ContactFormSchema } from "@/lib/validations/contact";
import { transporter, mailOptions } from "@/lib/nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = ContactFormSchema.parse(body);

    const emailContent = {
      ...mailOptions,
      subject: `Contact Form: ${validatedData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <h3>Message:</h3>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    await transporter.sendMail(emailContent);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
} 
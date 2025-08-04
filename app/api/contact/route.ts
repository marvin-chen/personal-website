import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || 
        process.env.EMAIL_USER === 'your-email@gmail.com' ||
        process.env.EMAIL_PASS === 'your-app-password') {
      
      // Log the submission for now
      console.log('Contact Form Submission (Email not configured):', {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
      });

      // Return success but indicate email setup needed
      return NextResponse.json({
        success: true,
        message: 'Message received! Email configuration needed for delivery.',
        needsEmailSetup: true
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Test connection first
    await transporter.verify();

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'marvinchen@princeton.edu',
      subject: `Website Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Sent from your portfolio website contact form</small></p>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Log the submission even if email fails
    const { name, email, subject, message } = await request.json();
    console.log('Contact Form Submission (Email failed):', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : 'Unknown error'
    });

    return NextResponse.json({
      success: true,
      message: 'Message received! There was an issue with email delivery, but your message has been logged.',
      emailFailed: true
    });
  }
}

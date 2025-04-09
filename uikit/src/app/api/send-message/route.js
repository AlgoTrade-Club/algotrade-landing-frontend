import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dbConnect from '@/lib/mongodb';
import ContactMessage from '@/models/ContactMessage';

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',  // Using Gmail as the service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export async function POST(request) {
  try {
    // Connect to MongoDB
    await dbConnect();
    
    // Parse request body
    const data = await request.json();
    const { firstName, lastName, email, phone, dialcode, message } = data;
    
    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Save to MongoDB
    const contactMessage = new ContactMessage({
      firstName,
      lastName,
      email,
      phone,
      dialcode,
      message
    });
    
    await contactMessage.save();
    
    // Send email notification
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'support@tradnomic.com',
      subject: 'New Contact Form Submission',
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${dialcode} ${phone || 'Not provided'}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${dialcode} ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });
    
    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
}
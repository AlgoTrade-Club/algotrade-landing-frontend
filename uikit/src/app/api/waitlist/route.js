import dbConnect from '@/lib/mongodb';
import WaitlistEntry from '@/models/WaitlistEntry';
import { NextResponse } from 'next/server';
import validator from 'validator';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Temporary placeholder
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export async function POST(request) {
  try {
    console.log('Connecting to database...');
    await dbConnect();
    console.log('Database connected.');

    const { name, email } = await request.json();
    console.log('Received request:', name, email);

    if (!name || !email) {
      console.log('Validation failed: Name and email are required.');
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    if (!validator.isEmail(email)) {
      console.log('Validation failed: Invalid email address.');
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    console.log('Checking for existing entry...');
    const existingEntry = await WaitlistEntry.findOne({ email });
    if (existingEntry) {
      console.log('Email already on the waitlist.');
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 409 }
      );
    }

    console.log('Creating new waitlist entry...');
    const newEntry = await WaitlistEntry.create({ name, email });
    console.log('New entry created:', newEntry);

    console.log('Sending confirmation email...');
    await transporter.sendMail({
      from: 'support@tradnomic.com',
      to: email,
      subject: 'You’re on the HammerTrade Waitlist!',
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for joining the HammerTrade waitlist! We'll keep you updated on our launch progress and notify you when we're ready.</p>
        <p>Best regards,<br/>The Tradnomic Team</p>
      `
    });
    console.log('Confirmation email sent.');

    return NextResponse.json(
      { message: 'Successfully joined waitlist!', entry: newEntry },
      { status: 201 }
    );

  } catch (error) {
    console.error('Waitlist submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
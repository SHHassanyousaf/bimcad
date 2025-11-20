import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER || 'asif_sheikh23@hotmail.com',
    pass: process.env.EMAIL_PASSWORD || 'rxnb sfmf bluu awta',
  },
});

router.post('/', async (req, res) => {
  try {
    const { fullName, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!fullName || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER || 'asif_sheikh23@hotmail.com',
      to: 'asif_sheikh23@hotmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER || 'asif_sheikh23@hotmail.com',
      to: email,
      subject: 'We received your message - BIMCAD',
      html: `
        <h2>Thank You for Contacting BIMCAD</h2>
        <p>Hi ${fullName},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p><strong>Your Message Summary:</strong></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p>Our team will review your inquiry and contact you shortly.</p>
        <p>Best regards,<br>BIMCAD Team</p>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ 
      message: 'Form submitted successfully! We will get back to you soon.' 
    });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ 
      error: 'Failed to send message. Please try again later.' 
    });
  }
});

export default router;
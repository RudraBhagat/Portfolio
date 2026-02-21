require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

app.use(cors());
app.use(express.json());

/* ---------- Health Check ---------- */
app.get('/api/contact', (req, res) => {
  res.json({ status: 'API working' });
});

/* ---------- Email Transport ---------- */
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* ---------- Contact API ---------- */
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message, botField } = req.body;

  // Honeypot
  if (botField) return res.json({ success: true });

  if (!name || !email || !message) {
    return res.status(400).json({ success: false });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: subject || `New message from ${name}`,
      html: `
        <h2>New Portfolio Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    res.json({ success: true });
  } catch (error) {
  console.error("❌ Email error:", error.message);
  res.status(500).json({ success: false, error: error.message });
  }
});

/* ---------- Server ---------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
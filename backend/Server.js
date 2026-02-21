// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const nodemailer = require('nodemailer');

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Email transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // Contact form API
// app.post('/api/contact', async (req, res) => {
//   const { name, email, subject, message, botField } = req.body;

//   // Honeypot spam protection
//   if (botField) {
//     return res.status(200).json({ success: true });
//   }

//   if (!name || !email || !message) {
//     return res.status(400).json({ success: false, message: 'Missing fields' });
//   }

//   try {
//     await transporter.sendMail({
//       from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_USER,
//       replyTo: email,
//       subject: subject || `New message from ${name}`,
//       html: `
//         <h2>New Portfolio Message</h2>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Message:</b></p>
//         <p>${message}</p>
//       `,
//     });

//     res.json({ success: true });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false });
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`✅ Backend running on http://localhost:${PORT}`);
// });


// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// const app = express();

// app.use(
//   cors({
//     origin: "*",
//     methods: ["GET", "POST"],
//   })
// );
// app.use(express.json());

// // Email transporter
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // Contact form API
// app.post("/api/contact", async (req, res) => {
//   const { name, email, subject, message, botField } = req.body;

//   // Honeypot spam protection
//   if (botField) {
//     return res.status(200).json({ success: true });
//   }

//   if (!name || !email || !message) {
//     return res
//       .status(400)
//       .json({ success: false, message: "Missing fields" });
//   }

//   try {
//     await transporter.sendMail({
//       from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_USER,
//       replyTo: email,
//       subject: subject || `New message from ${name}`,
//       html: `
//         <h2>New Portfolio Message</h2>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Message:</b></p>
//         <p>${message}</p>
//       `,
//     });

//     res.json({ success: true });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`✅ Backend running on port ${PORT}`);
// });


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
  service: 'gmail',
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
    console.error(error);
    res.status(500).json({ success: false });
  }
});

/* ---------- Server ---------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
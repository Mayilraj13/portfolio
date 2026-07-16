const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  // In production, you would send an email here using Nodemailer, SendGrid, etc.
  // For now, we log and acknowledge
  console.log('📬 New Contact Message:');
  console.log(`  From: ${name} <${email}>`);
  console.log(`  Subject: ${subject || '(no subject)'}`);
  console.log(`  Message: ${message.substring(0, 200)}${message.length > 200 ? '...' : ''}`);
  console.log('—'.repeat(40));

  // TODO: Replace with actual email sending logic
  // Example with Nodemailer:
  // const transporter = nodemailer.createTransport({ ... });
  // await transporter.sendMail({ from: email, to: 'mayilraj1314@gmail.com', subject, text: `From: ${name} <${email}>\n\n${message}` });

  res.json({ success: true, message: 'Message received successfully!' });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio backend running at http://localhost:${PORT}`);
  console.log(`   Contact API: POST http://localhost:${PORT}/api/contact`);
});

// Vercel Serverless Function — POST /api/contact
export default async function handler(req, res) {
  // Only accept POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  // TODO: Replace with actual email sending (Nodemailer, SendGrid, Resend, etc.)
  // Example with Nodemailer:
  // const transporter = nodemailer.createTransport({ ... });
  // await transporter.sendMail({ from: email, to: 'mayilraj1314@gmail.com', subject, text: `From: ${name} <${email}>\n\n${message}` });

  console.log('📬 New Contact Message:');
  console.log(`  From: ${name} <${email}>`);
  console.log(`  Subject: ${subject || '(no subject)'}`);
  console.log(`  Message: ${message.substring(0, 200)}${message.length > 200 ? '...' : ''}`);

  return res.status(200).json({ success: true, message: 'Message received successfully!' });
}

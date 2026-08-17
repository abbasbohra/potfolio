const nodemailer = require("nodemailer");

const clean = (value) => String(value || "").trim();
const escapeHtml = (value) => value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);

module.exports = async function contactHandler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }
  const name = clean(req.body.name);
  const email = clean(req.body.email);
  const message = clean(req.body.message);
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !emailIsValid || !message || name.length > 100 || message.length > 3000) {
    return res.status(400).json({ error: "Please provide a valid name, email, and message." });
  }
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.CONTACT_TO) {
    return res.status(503).json({ error: "Email service is not configured." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
    await transporter.sendMail({
      from: `Portfolio contact <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_TO,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<h2>New portfolio message</h2><p><b>Name:</b> ${escapeHtml(name)}<br><b>Email:</b> ${escapeHtml(email)}</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact email failed:", error.message);
    return res.status(500).json({ error: "Unable to send email." });
  }
};


import nodemailer from "nodemailer";

export async function sendAppointmentEmail(to: string, subject: string, text: string) {
  if (!process.env.SMTP_HOST) return; 

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || "noreply@rwcaa.local",
    to,
    subject,
    text,
  });
}

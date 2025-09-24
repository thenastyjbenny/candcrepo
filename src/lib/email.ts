import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '1025'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: process.env.SMTP_USER && process.env.SMTP_PASS ? {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  } : undefined,
})

export interface LeadNotificationData {
  name: string
  email: string
  phone?: string
  budget: string
  message: string
}

export async function sendLeadNotification(data: LeadNotificationData) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2F5D50;">New Lead from Content on Cue Media</h2>
      
      <div style="background: #F8F6F0; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #171717; margin-bottom: 15px;">Lead Details</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Message:</strong></p>
        <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
          ${data.message.replace(/\n/g, '<br>')}
        </div>
      </div>
      
      <p style="color: #6B4F3B; font-size: 14px;">
        This lead was submitted through the Content on Cue Media website.
      </p>
    </div>
  `

  const text = `
New Lead from Content on Cue Media

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
Budget: ${data.budget}

Message:
${data.message}

---
This lead was submitted through the Content on Cue Media website.
  `

  return await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO || 'admin@contentoncue.example',
    subject: `New Lead: ${data.name} (${data.budget})`,
    text,
    html,
  })
}

export async function sendLeadConfirmation(data: { name: string; email: string }) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2F5D50;">Thank you for your interest!</h2>
      
      <p>Hi ${data.name},</p>
      
      <p>Thank you for reaching out to Content on Cue Media. We've received your message and will get back to you within 24 hours.</p>
      
      <p>In the meantime, feel free to check out our <a href="${process.env.NEXT_PUBLIC_SITE_URL}/video-packages" style="color: #C8A644;">video packages</a> or browse our <a href="${process.env.NEXT_PUBLIC_SITE_URL}/work" style="color: #C8A644;">portfolio</a>.</p>
      
      <p>Best regards,<br>
      The Content on Cue Media Team</p>
    </div>
  `

  const text = `
Thank you for your interest!

Hi ${data.name},

Thank you for reaching out to Content on Cue Media. We've received your message and will get back to you within 24 hours.

In the meantime, feel free to check out our video packages or browse our portfolio.

Best regards,
The Content on Cue Media Team
  `

  return await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: data.email,
    subject: 'Thank you for contacting Content on Cue Media',
    text,
    html,
  })
}

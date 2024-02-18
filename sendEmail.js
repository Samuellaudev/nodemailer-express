const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "YOUR_SMTP_SERVER_HOST",
  port: 465,
  secure: true,
  auth: {
    user: "YOUR_EMAIL_ALIAS_FROM_EMAIL_SERVICE_PROVIDER",
    pass: "YOUR_EMAIL_PASSWORD_FROM_EMAIL_SERVICE_PROVIDER",
  },
});

const sendEmail = async ({ from, to, subject, text = '', html = '' }) => {
  try {
    const info = await transporter.sendMail({ from, to, subject, text, html });
    return info;
  } catch (error) {
    console.error('Error sending email: ', error);
    throw new Error('Failed to send email');
  }
};

module.exports = sendEmail;
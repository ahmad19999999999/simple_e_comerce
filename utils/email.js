
const nodemailer = require('nodemailer');

// Configure the nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'mail.akis-dz.com',
  port: 465, // or 587
  secure: true,
  auth: {
    user: 'ahmad@akis-dz.com',
    pass: '?at9EHTR&6YSpH3j',
  },
});

function sendResetEmail(email, token) {
  const mailOptions = {
    from: 'ahmad@akis-dz.com',
    to:email,
    subject: 'Password Reset',
    text:token
  };

  return transporter.sendMail(mailOptions);
}

module.exports = { sendResetEmail };
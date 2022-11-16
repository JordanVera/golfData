import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';
import nodemailer from 'nodemailer';
import sendGridTransport from 'nodemailer-sendgrid-transport';

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const transporter = nodemailer.createTransport(
  sendGridTransport({ auth: { api_key: process.env.SENDGRID_API_KEY } })
);

const postSubmitForm = async (req, res) => {
  const { firstName, lastName, email, msg } = req.body;

  const formSubmission = {
    to: 'pgaalpha@protonmail.com',
    from: 'jvera@frontiergp.com',
    subject: '🔔🔔🔔 Website Form Submission 🔔🔔🔔',
    html: `<strong>First Name:</strong> ${firstName}
    <strong>Last Name:</strong> ${lastName}
    <strong>Email:</strong> ${email}
    <strong>Message:</strong> ${msg}
    `,
  };

  try {
    await transporter.sendMail(formSubmission);

    console.log('msg sent succesfully');
    res.json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

export default postSubmitForm;

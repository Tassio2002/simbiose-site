require("dotenv").config();

const nodemailer = require("nodemailer");

const MAIL_HOST = process.env.MAIL_HOST;
const MAIL_PORT = process.env.MAIL_PORT;
const MAIL_USER = process.env.MAIL_USER;
const MAIL_PASS = process.env.MAIL_PASS;

const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  secure: false,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default async function handler(request, response) {
  const { name, email, phone, message } = request.body;

  await transporter.sendMail({
    subject: "Novo contato pelo Site",
    from: MAIL_USER,
    to: [
      "joaop@simbioseventures.com",
      "marina.witzel@simbioseventures.com",
      "comercial@simbioseventures.com",
    ],
    replyTo: email,
    html: ` 
        <p><strong>Nome: </strong>${name}</p>
        <p><strong>Email: </strong>${email}</p>
        <p><strong>Telefone: </strong>${phone}</p>
        <p><strong>Mensagem: </strong>${message}</p>
      `,
  });

  response.json({ success: true });
}

require('dotenv').config()

const sgMail = require("@sendgrid/mail")

const SG_API_KEY = process.env.SG_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL;
const TO_EMAIL = process.env.TO_EMAIL;

sgMail.setApiKey(SG_API_KEY);

export default async function handler(request, response){
    const {name, email, phone, message } = request.body

    const msg = {
        to: TO_EMAIL,
        from: FROM_EMAIL,
        subject: 'Br-Talent contato',
        html:
          ` <p><strong>Nome: </strong>${name}</p>
            <p><strong>Email: </strong>${email}</p>
            <p><strong>Telefone: </strong>${phone}</p>
            <p><strong>Mensagem: </strong>${message}</p>`
    };

    sgMail
      .send(msg)
      .then((response) => {
          console.log(response[0].statusCode)
          console.log(response[0].headers)
      })
      .catch((error) => {
          console.error(error)
      })

    response.json({success: true})
}
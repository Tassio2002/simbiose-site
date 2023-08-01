require('dotenv').config()

const sgMail = require("@sendgrid/mail")

const {SG_API_KEY, FROM_EMAIL, TO_EMAIL} = process.env

sgMail.setApiKey(SG_API_KEY);

export default async function handler(request, response){
    const {name, company, phone, email, message } = request.body

    const msg = {
        to: TO_EMAIL,
        from: FROM_EMAIL,
        subject: 'Br-Talent contato',
        html:
            `   <p><strong>Nome: </strong>${name}</p>
            <p><strong>Empresa: </strong>${company}</p>
            <p><strong>Telefone: </strong>${phone}</p>
            <p><strong>Email: </strong>${email}</p>
            <p><strong>Mensagem: </strong>${message}</p>`
    };
    await sgMail.send(msg);
    response.json({success: true})
}
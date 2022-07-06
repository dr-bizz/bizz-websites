const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')

const transporter = nodemailer.createTransport(sgTransport({
  auth: {
    api_key: process.env.SENDGRID
  }
}))


const send = ({ to, email, subject, name, html }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const message = {
    from,
    to,
    subject,
    html,
    replyTo: from
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}
module.exports = send
const nodemailer = require('nodemailer');
const Email = require('email-templates');

const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8fe6489bcd18b7", //generated by Mailtramp
    pass: "c0f9812da77bc4" //generated by Mailtramp
  }
});

module.exports = new Email({
  transport: transporter,
  send: true,
  preview: false,
  views: {
  	root: 'src/email-templates/'
  }
});

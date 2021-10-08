//imports
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const nodemailer = require("nodemailer");

//environment variables
require('dotenv').config();
const USERNAME = process.env.SMTP_USERNAME;
const PASSWORD = process.env.SMTP_PASSWORD;
///const SMTP_PORT = process.env.SMTP_PORT;
///const SMTP_SERVER = process.env.SMTP_SERVER;


//express usage config
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//start server
app.listen(80, function() {
    console.log(`Server started at ${80}`);
})


//send mail route
app.post("/sendmail", function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;
  sendEmail(name, email, subject, message)
  .then(result => {
    console.log(`Email send successfully by ${email}`, result);
    res.send("<h1>Thank you for messaging!</h1>");
  }).catch(error => {
    console.log(error.message);
    res.send(error.message);
  })
})



async function sendEmail(name, senderMail, subject, message) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'SendinBlue', // no need to set host or port etc.
      auth: {
          user: USERNAME,
          pass: PASSWORD
      }
    });
    return transporter.sendMail({
      to: USERNAME,
      from: `${name}<${senderMail}>`,
      subject: subject,
      text: message
    });
  } catch (error) {
    return error;
  }
}




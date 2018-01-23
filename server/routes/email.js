
// Requiring Dependancies
DotEnv = require('dotenv-node');
new DotEnv();
const router = require('express').Router();
const pg = require('pg');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const emailTemp = require('../templates/email.js')


router.post('/sendEmail', function(req, res){
  let form = req.body;
  console.log(form);

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: process.env.ACCOUNT_NAME,
      pass: process.env.ACCOUNT_PASSWORD
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Chris Stanton Form Example One" <'+process.env.ACCOUNT_NAME+'>', // sender address
    to: 'cstanton0760@yahoo.com', // list of receivers
    subject: 'Form Example One', // Subject line
    html: '<b>Hello world?</b>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    res.sendStatus(201);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });


});


module.exports = router;

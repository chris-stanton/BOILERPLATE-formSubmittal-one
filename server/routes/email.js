
// Requiring Dependancies
DotEnv = require('dotenv-node');
new DotEnv();
const router = require('express').Router();
const pg = require('pg');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

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
    html: '<span><h2> First Name: </h2><h3>' + form.firstName + '</h3></span>' +
          '<span><h2> Last Name: </h2><h3>' + form.lastName + '</h3></span>' +
          '<span><h2> Phone: </h2><h3>' + form.contactPhone + '</h3></span>' +
          '<span><h2> Email: </h2><h3>' + form.contactEmail + '</h3></span>' +
          '<span><h2> Address: </h2><h4>' + form.contactAddress + '<br>' +
          form.contactCity + ' ' +  form.contactState + ', ' + form.contactZip + '</h4></span>' +
          '<span><h2> Comments: </h2><p>' + form.comments + '</p></span>'
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

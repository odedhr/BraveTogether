const nodemailer = require('nodemailer');

module.exports = async (data) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'emmet83@ethereal.email', // generated ethereal user
      pass: 'BnCEpySsAfz2aJ6zfZ', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'The Express App <foo@example.com>', // sender address
    to: data.email, // list of receivers
    subject: data.subject, // Subject line
    text: data.text // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}


// Name	Emmet Jerde
// Username	emmet83@ethereal.email (also works as a real inbound email address)
// Password	BnCEpySsAfz2aJ6zfZ
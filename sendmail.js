var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nthambikioko96@gmail.com',
        pass: 'friAh54#'
    }
});

var mailOptions = {
    from: 'nthambikioko96@gmail.com',
    to: 'musyokilauryn1@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
    }else{
        console.log('Email sent: ' +info.response);

    }
});
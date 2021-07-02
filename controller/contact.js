const contact = require('../model/contact')
const  nodemailer = require('nodemailer');

exports.contact = async(req,res)=>
{
   
    console.log("BODY",req.body);
    
    // const email = req.body.email;
  let sendingtext;
    if(req.body.query){
       sendingtext = 'email = '+req.body.email  +' , name ='+req.body.name +', phone = '+req.body.name+',  query'+ req.body.query;
    }
    else{
       sendingtext = 'email = '+req.body.email  +' , name ='+req.body.name +', phone = '+req.body.name;
    }
    
    var nodemailer = require('nodemailer');

    var transporter =await  nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'bhatraprerna061@gmail.com',
        pass: 'ocozpxlfopgvkjoi'
      }
    });
    
    var mailOptions = {
      from: 'bhatraprerna061@gmail.com',
      to: 'teamoftrader01@gmail.com',
      subject: 'Team of Trader query',
      text: sendingtext
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);

        res.json({"error":error})
      } else {
        console.log('Email sent: ' + info.response);
        let data = 'Email sent: ' + info.response;
        res.json({data})
      }
    });

} 


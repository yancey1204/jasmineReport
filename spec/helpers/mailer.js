var nodemailer = require("nodemailer");

var mailer = {

  transporter : undefined,

  mailOptions : {},

  setUp : function(option) {

    this.transporter = nodemailer.createTransport("smtp.163.com");
    this.mailOptions.from = option.from;
    this.mailOptions.to = option.to;
    this.mailOptions.subject = option.subject;
    this.mailOptions.text = option.text;
  },

  sendMail : function(){

    if(this.transporter == undefined){
      console.log("Mail not setup, fail to send");
    }else{
      this.transporter.sendMail(this.mailOptions, function(err, info){
        if(err) console.log(err);
        else console.log("Mail Sent Successfully");
      })
    }
  }

};

module.exports = mailer;

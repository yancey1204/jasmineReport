var address = 'yanzh1029@163.com';

var transporter = nodemailer.createTransport(smtpConfig);
var smtpConfig = {
    host: 'smtp.163.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'yanzh1029@163.com',
        pass: '690664076'
    }
};

var mailOptions = {
    from: address,
    to: address,
    subject: 'Go-To Test ✔', // Subject line
    html: `
        <p>This message includes a
        <a href="https://developers.google.com/gmail/markup/reference/go-to-action">Go-To action</a></p>
        <script type="application/ld+json">
        {
          "@context": "http://schema.org",
          "@type": "EmailMessage",
          "potentialAction": {
            "@type": "ViewAction",
            "url": "https://google.com",
            "name": "Go to Google"
          },
          "description": "Search for something from Google"
        }
        </script>`
};

// send mail
transporter.sendMail(mailOptions);

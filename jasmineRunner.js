var Jasmine = require('jasmine');
var jasmine = new Jasmine();
var report = require('./spec/report/CustomReport');
var mailer = require("./spec/helpers/mailer.js");

jasmine.loadConfigFile('spec/support/jasmine.json');

jasmine.onComplete(function(passed){
    if (passed) {
        console.log('all specs have passed');

        //send email
        var option = {
          from: 'yanzh1029@163.com',
          to: 'yanzh1029@163.com',
          subject: 'HAHAHA, this is a test mail',
          text:report.content + "all specs have passed"
        }
        mailer.setUp(option);
        mailer.sendMail();
    } else {
        console.log('at least one spec has failed');
    }
});

jasmine.addReporter(report);
jasmine.execute();

var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");

/* GET home page. */
router.get('/', function(req, res) {
	async function sendingMail() {
		let testAccount = await nodemailer.createTestAccount();

	   	// create reusable transporter object using the default SMTP transport
		let transporter = nodemailer.createTransport({
			host: "smtp.ethereal.email",
			port: 587,
			secure: false, // true for 465, false for other ports
			auth: {
				user: testAccount.user, // generated ethereal user
				pass: testAccount.pass, // generated ethereal password
			}
		});

		let info = await transporter.sendMail({
			from: 'dovly417@gmail.com', // sender address
			to: "vishalubale2299@gmail.com, sekharpanda68@gmail.com", // list of receivers
			subject: "Hello ✔", // Subject line
			text: "Hello world?", // plain text body
			html: "<b>Hello world?</b>", // html body
	  	});
	}
	//sendingMail();
	sendingMail().catch(console.error);
});

module.exports = router;

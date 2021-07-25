import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
	service: 'SendinBlue',
	auth: {
		user: process.env.USER_MAIL,
		pass: process.env.PASS_MAIL,
	},
});

export default transport;

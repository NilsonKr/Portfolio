import { NextApiHandler } from 'next';
import transportMail from '../../utils/mail';

const mailHandler: NextApiHandler = async (req, res) => {
	if (req.method === 'POST') {
		const info: TemailInfo = req.body;
		//Format email and send it through nodemailer
		const formatMail = {
			from: info.email,
			to: process.env.USER_MAIL,
			subject: info.subject,
			text: info.message,
			html: `<h3>${info.message}</h3> <em>${info.name}</em>`,
		};

		try {
			await transportMail.sendMail(formatMail);

			res.status(205).json({ error: null, result: 'Email Sendend!' });
		} catch (error) {
			console.log(error);
			res.end();
		}
	}
};

export default mailHandler;

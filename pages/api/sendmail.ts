import { NextApiHandler } from 'next';
import transportMail from '../../utils/mail';

const mailHandler: NextApiHandler = async (req, res) => {
	if (req.method === 'POST') {
		const info: TemailInfo = req.body;
		//Format email and send it through nodemailer
		const formatMail = {
			from: info.email,
			to: 'nilson444dev@gmail.com',
			subject: info.subject,
			text: info.message,
			html: `<h3>${info.message}</h3> <em>${info.name}</em>`,
		};

		try {
			await transportMail.sendMail(formatMail);

			res.status(200).json({ error: null, result: 'Email Sendend!' });
		} catch (error) {
			console.log(error);
			res.end();
		}
	}
};

export default mailHandler;

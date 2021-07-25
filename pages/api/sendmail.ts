import { NextApiHandler } from 'next';

const mailHandler: NextApiHandler = (req, res) => {
	console.log('Email Send');

	res.end();
};

export default mailHandler;

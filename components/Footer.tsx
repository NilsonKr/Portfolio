import React from 'react';

const Footer = ({ image }: { image: string }) => {
	return (
		<footer className='footer__container'>
			<img src={image} alt='Footer' width='100%' />
			<p>Made with 💚 by NilsonKr</p>
		</footer>
	);
};

export default Footer;

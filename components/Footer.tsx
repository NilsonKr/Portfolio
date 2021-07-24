import React from 'react';

import { FooterStyled } from '../styles/styledComponents/Footer';

const Footer = ({ image }: { image: string }) => {
	return (
		<FooterStyled>
			<img src={image} alt='Footer' width='100%' />
			<p>Made with 💚 by Nilson Diaz</p>
		</FooterStyled>
	);
};

export default Footer;

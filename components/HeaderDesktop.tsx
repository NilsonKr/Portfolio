import React from 'react';

import SwitchTheme from './SwitchTheme';

import { NavbarList } from '../styles/styledComponents/Header';

const HeaderDesktop = ({ theme }: { theme: Ttheme }) => {
	return (
		<>
			<section className='header__desktop'>
				<img
					className='header--logo'
					src='/images/LigthLogo.svg'
					alt='Nilson Diaz Logo'
				/>
				<div className='navbar__desktop'>
					<nav className='navbar navbar__desktop--items'>
						<NavbarList>
							<li>
								<a href='#landing'>Home</a>
							</li>
							<li>
								<a href='#projects'>Projects</a>
							</li>
							<li>
								<a href='#contact'>Contact</a>
							</li>
						</NavbarList>
					</nav>
					<SwitchTheme iconColor={theme.textMain} />
				</div>
			</section>
		</>
	);
};

export default HeaderDesktop;

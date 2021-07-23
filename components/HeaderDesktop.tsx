import React from 'react';

import SwitchTheme from './SwitchTheme';

const HeaderDesktop = () => {
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
						<ul>
							<li>
								<a href='#landing'>Home</a>
							</li>
							<li>
								<a href='#projects'>Projects</a>
							</li>
							<li>
								<a href='#contact'>Contact</a>
							</li>
						</ul>
					</nav>
					<SwitchTheme />
				</div>
			</section>
		</>
	);
};

export default HeaderDesktop;

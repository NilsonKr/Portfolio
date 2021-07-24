import { useState, useRef, useEffect } from 'react';

import SwitchTheme from './SwitchTheme';

import {
	HeaderMobileStyled,
	HeaderMobileItems,
} from '../styles/styledComponents/HeaderMobile';

import { NavbarList } from '../styles/styledComponents/Header';

type MobileProps = {
	isOpen: boolean;
	setOpen: () => void;
	theme: Ttheme;
};

const HeaderMobile = ({ isOpen, setOpen, theme }: MobileProps) => {
	//Handle Mobile Behaviour
	const [isSticky, setSticky] = useState<boolean>(false);
	const trackElement = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			const mobileNavbar = entries[0];

			if (!mobileNavbar.isIntersecting) {
				setSticky(true);
			} else {
				setSticky(false);
			}
		});

		observer.observe(trackElement.current as HTMLElement);

		return () => observer.disconnect();
	}, []);

	return (
		<>
			<section className='header__mobile' ref={trackElement}>
				<img
					className='header--logo'
					src='/images/LigthLogo.svg'
					alt='Nilson Diaz Logo'
				/>
				<SwitchTheme iconColor={theme.textMain} />
			</section>
			<HeaderMobileStyled
				className={`navbar__mobile ${isSticky && 'navbar__mobile--sticky'}`}
			>
				<div className={`navbar__open--symbol `} onClick={setOpen}>
					<div
						className={`navbar__open--line ${isOpen ? 'close--line1' : 'open--line1'}`}
					></div>
					<div
						className={`navbar__open--line  ${isOpen ? 'close--line2' : 'open--line2'}`}
					></div>
				</div>
				<HeaderMobileItems
					className={`navbar navbar__mobile--items ${isOpen && 'open--items__mobile'} `}
				>
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
				</HeaderMobileItems>
			</HeaderMobileStyled>
		</>
	);
};

export default HeaderMobile;

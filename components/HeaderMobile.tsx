import { useState, useRef, useEffect } from 'react';

import SwitchTheme from './SwitchTheme';

type MobileProps = {
	isOpen: boolean;
	setOpen: () => void;
};

const HeaderMobile = ({ isOpen, setOpen }: MobileProps) => {
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
				<SwitchTheme />
			</section>
			<section className={`navbar__mobile ${isSticky && 'navbar__mobile--sticky'}`}>
				<div className={`navbar__open--symbol `} onClick={setOpen}>
					<div
						className={`navbar__open--line ${isOpen ? 'close--line1' : 'open--line1'}`}
					></div>
					<div
						className={`navbar__open--line  ${isOpen ? 'close--line2' : 'open--line2'}`}
					></div>
				</div>
				<nav
					className={`navbar navbar__mobile--items ${isOpen && 'open--items__mobile'} `}
				>
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
			</section>
		</>
	);
};

export default HeaderMobile;

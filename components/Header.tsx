import { useState, useRef, useEffect } from 'react';

const Header = () => {
	const [isOpen, openHeader] = useState<boolean>(false);
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
	}, []);

	return (
		<header className={``}>
			<section className='header__mobile' ref={trackElement}>
				<img
					className='header--logo'
					src='/images/LigthLogo.svg'
					alt='Nilson Diaz Logo'
				/>
				<label className='theme__handler'>
					<input type='checkbox' />
					<span className='theme--pointer'></span>
					<div className='theme--options'>
						<img src='/images/Sun.svg' alt='Ligth Mode' />
						<img src='/images/Moon.svg' alt='Dark Mode' />
					</div>
				</label>
			</section>
			<section className={`navbar__mobile ${isSticky && 'navbar__mobile--sticky'}`}>
				<div className={`navbar__open--symbol `} onClick={() => openHeader(!isOpen)}>
					<div
						className={`navbar__open--line ${isOpen ? 'close--line1' : 'open--line1'}`}
					></div>
					<div
						className={`navbar__open--line  ${isOpen ? 'close--line2' : 'open--line2'}`}
					></div>
				</div>
				<nav className={`navbar--items ${isOpen && 'open--items__mobile'} `}>
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
		</header>
	);
};

export default Header;

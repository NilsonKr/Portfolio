const Header = () => {
	return (
		<header>
			<img className='header--logo' src='/images/LigthLogo.svg' alt='Nilson Diaz Logo' />
			<section className='header__navbar'>
				<div className='navbar--open'>
					<div className='navbar__open--line open--line1'></div>
					<div className='navbar__open--line open--line2'></div>
				</div>
				<nav className='navbar--items'>
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
			<div className='theme__handler'></div>
		</header>
	);
};

export default Header;

import { useState } from 'react';

import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';

const Header = () => {
	const [isOpen, openHeader] = useState<boolean>(false);

	const handleOpenMobile = () => {
		openHeader(!isOpen);
	};

	return (
		<header>
			{/* <HeaderMobile isOpen={isOpen} setOpen={handleOpenMobile} /> */}
			<HeaderDesktop />
		</header>
	);
};

export default Header;

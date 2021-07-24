import { useState } from 'react';
import useMediaQuery from 'hooks/useMediaQuery';

import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';

const Header = () => {
	const [isDesktop] = useMediaQuery(1024, 'width');
	const [isOpen, openHeader] = useState<boolean>(false);

	const handleOpenMobile = () => {
		openHeader(!isOpen);
	};

	return (
		<header>
			{isDesktop ? (
				<HeaderDesktop />
			) : (
				<HeaderMobile isOpen={isOpen} setOpen={handleOpenMobile} />
			)}
		</header>
	);
};

export default Header;

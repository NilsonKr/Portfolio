import { useState } from 'react';
import useMediaQuery from 'hooks/useMediaQuery';

import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';

const Header = () => {
	const [isMobile] = useMediaQuery(1024, 'width');
	const [isOpen, openHeader] = useState<boolean>(false);

	const handleOpenMobile = () => {
		openHeader(!isOpen);
	};

	return (
		<header>
			{isMobile ? (
				<HeaderDesktop />
			) : (
				<HeaderMobile isOpen={isOpen} setOpen={handleOpenMobile} />
			)}
		</header>
	);
};

export default Header;

import { useState, useContext } from 'react';
import useMediaQuery from 'hooks/useMediaQuery';
import { ThemeContext } from 'styled-components';

import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';

import { HeaderStyled } from '../styles/styledComponents/Header';

const Header = () => {
	const themeContext = useContext<Ttheme>(ThemeContext);
	const [isDesktop] = useMediaQuery(1024, 'width');
	const [isOpen, openHeader] = useState<boolean>(false);

	const handleOpenMobile = () => {
		openHeader(!isOpen);
	};

	return (
		<HeaderStyled>
			{isDesktop ? (
				<HeaderDesktop theme={themeContext} />
			) : (
				<HeaderMobile isOpen={isOpen} setOpen={handleOpenMobile} theme={themeContext} />
			)}
		</HeaderStyled>
	);
};

export default Header;

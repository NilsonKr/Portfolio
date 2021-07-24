import styled from 'styled-components';

export const NavbarList = styled.ul`
	list-style: none;

	li {
		padding: 5px 0;
		font-size: 18px;
	}

	a {
		text-decoration: none;
		color: ${p => p.theme.textMain};
	}
`;

export const HeaderStyled = styled.header`
	width: 100%;
	background: ${p => p.theme.background};

	.header--logo {
		width: 80px;
		height: 80px;
	}

	@media screen and (min-width: 1024px) {
		.header--logo {
			width: 150px;
			height: 150px;
		}

		li {
			display: inline-block;
			margin: 0 20px;
			font-size: 30px;
			font-weight: 600;
		}
	}
`;

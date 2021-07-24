import styled from 'styled-components';

export const HeaderMobileStyled = styled.section`
	width: 100%;
	background-color: ${p => p.theme.background};

	.navbar__open--line {
		width: 5px;
		height: 20px;
		background-color: ${p => p.theme.textMain};
		border-radius: 10px;
		transition: transform 0.4s;
	}
`;

export const HeaderMobileItems = styled.nav`
	position: absolute;
	left: -100%;
	width: 100%;
	padding-bottom: 10px;
	text-align: center;
	background: ${p => p.theme.background};
	border-bottom: 1px solid ${p => p.theme.textMain};
`;

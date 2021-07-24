import styled from 'styled-components';

export const FooterStyled = styled.footer`
	position: relative;
	padding-top: 80px;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	height: 100px;
	background-color: ${p => p.theme.background};

	img {
		position: absolute;
		height: 100%;
		z-index: 1;
	}

	p {
		color: ${p => p.theme.textMain};
		margin-bottom: 10px;
		z-index: 2;
	}

	@media screen and (min-width: 1024px) {
		height: 200px;

		p {
			font-size: 18px;
		}
	}
`;

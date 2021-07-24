import styled from 'styled-components';

export const DescriptionStyled = styled.div`
	grid-area: description;
	text-align: center;
	color: ${p => p.theme.textMain};

	.desc--greeting {
		font-size: 26px;
	}
	.desc--name {
		font-size: 38px;
		margin: 2px;
	}

	.desc--work {
		font-weight: 500;
		color: ${p => p.theme.textSecond};
	}

	p {
		width: 90%;
		margin: 10px 0 20px;
		color: ${p => p.theme.textSecond};
	}

	@media screen and (min-width: 1024px) {
		width: 100%;
		text-align: start;
		place-self: end;
		padding-left: 100px;

		.desc--work {
			font-size: 24px;
		}
		p {
			font-size: 18px;
		}
	}

	@media screen and (min-width: 1440px) {
		width: 85%;

		.desc--greeting {
			font-size: 38px;
		}
		.desc--name {
			font-size: 50px;
		}
	}
`;

export const LandingStyled = styled.section`
	display: grid;
	place-items: center;
	grid-template-areas:
		'description'
		'thumbnails'
		'techhub';
	padding-top: 120px;
	background-color: ${p => p.theme.background};

	@media screen and (min-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-areas:
			'description  techhub'
			'thumbnails  techhub';
		padding-top: 40px;
	}

	@media screen and (min-width: 1440px) {
		padding-top: 0;
	}
`;

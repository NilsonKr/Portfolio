import styled from 'styled-components';

export const ContactStyled = styled.section`
	display: grid;
	padding-top: 70px;
	background-color: ${p => p.theme.background};

	.contact--title {
		font-size: 35px;
		font-family: var(--main-font);
		color: ${p => p.theme.textMain};
		text-align: center;
	}

	.contact--subtitle {
		font-size: 24px;
		color: ${p => p.theme.textSecond};
		text-align: center;
	}

	.contact--gmail {
		margin-top: 20px;
		padding-left: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.contact--gmail p {
		margin-left: 10px;
		color: ${p => p.theme.textSecond};
		font-size: 18px;
	}

	.contact--gmail img {
		height: 25px;
		width: 35px;
	}

	@media screen and (min-width: 1024px) {
		padding-top: 150px;
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (min-width: 1444px) {
		.contact--title {
			font-size: 45px;
		}
	}
`;

export const FieldTitleStyled = styled.p`
	font-family: var(--main-font);
	color: ${p => p.theme.textMain};
	font-weight: 800;
	font-size: 22px;
	margin-bottom: 10px;
`;

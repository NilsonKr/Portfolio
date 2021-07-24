import styled from 'styled-components';

export const ProjectsStyled = styled.section`
	padding-top: 50px;
	background-color: ${p => p.theme.background};

	.projects--header {
		text-align: center;
	}

	.projects--header a {
		text-decoration: none;
		font-size: 40px;
		font-weight: 800;
		font-family: var(--main-font);
		color: ${p => p.theme.textMain};
		cursor: pointer;
	}

	@media screen and (min-width: 1440px) {
		.projects--header a {
			font-size: 55px;
		}
	}
`;

export const DescriptionStyled = styled.div`
	grid-area: description;

	.project--title {
		font-size: 28px;
		font-family: var(--main-font);
		font-weight: 700;
		color: ${p => p.theme.textMain};
		margin-bottom: 10px;
	}

	.project--title span {
		color: var(--special-color);
	}

	p {
		color: ${p => p.theme.textSecond};
	}

	@media screen and (min-width: 1024px) {
		width: 80%;

		.project--title {
			font-size: 40px;
		}
		p {
			font-size: 22px;
		}
	}
`;

export const LinksStyled = styled.div`
	margin-top: 20px;

	a {
		display: flex;
		text-decoration: none;
		align-items: center;
		margin-top: 10px;
	}

	.project--repo span {
		color: ${p => p.theme.textSecond};
		font-weight: 500;
		margin-left: 5px;
	}

	.project--web span {
		text-decoration: none;
		color: var(--special-color);
		margin-left: 5px;
	}
`;

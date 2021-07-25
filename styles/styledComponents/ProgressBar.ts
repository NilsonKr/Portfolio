import styled from 'styled-components';

type props = {
	scroll: number;
};

export const ProgressScrollStyled = styled.section<props>`
	position: fixed;
	top: 0;
	width: 100%;
	height: 8px;
	background: linear-gradient(270deg, #cc00ff 0%, #41ffd1 99.69%);
	z-index: 5;

	.progress__hidden {
		position: fixed;
		top: 0;
		width: 100%;
		height: 8px;
		background: linear-gradient(
			to right,
			transparent ${p => p.scroll}%,
			${p => p.theme.background} 0%
		);
		transition: background 1s;
		z-index: 10;
	}
`;

import styled from 'styled-components';

const shadows = {
	dark: '-2px -2px 6px rgba(119, 119, 119, 0.6), 2px 2px 6px rgba(0, 0, 0, 1)',
	ligth: '-2px -2px 6px rgba(214, 214, 214, 0.5), 2px 2px 6px rgba(139, 139, 139, 0.5)',
};

const SwitchPointer = styled.span`
	position: absolute;
	left: 7px;
	top: 2px;
	width: 35px;
	height: 35px;
	border-radius: 50%;
	background-color: ${p =>
		p.theme.background === '#1d1d1d' ? '#000' : p.theme.background};
	box-shadow: ${p => (p.theme.background === '#1d1d1d' ? shadows.dark : shadows.ligth)};
	transition: transform 1s;
	z-index: 2;
	cursor: pointer;
`;

export default SwitchPointer;

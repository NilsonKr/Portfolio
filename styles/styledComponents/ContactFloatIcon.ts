import styled from 'styled-components';

const ContactFloatIcon = styled.div`
	position: fixed;
	right: 10px;
	bottom: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 12px;
	border-radius: 50%;
	background-color: ${p => p.theme.textMain};
	line-height: 0;
	z-index: 10;

	@media screen and (min-width: 1024px) {
		.contact--fixedIcon {
			bottom: 20px;
			right: 20px;
		}
	}
`;

export default ContactFloatIcon;

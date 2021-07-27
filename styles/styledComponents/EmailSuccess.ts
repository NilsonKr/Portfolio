import styled from 'styled-components';

const EmailSuccessStyled = styled.div`
	position: fixed;
	top: -70px;
	left: 50%;
	width: 300px;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	border-radius: 15px;
	background-color: aquamarine;
	transform: translateX(-50%);
	animation: successEmail 4s infinite linear;
	z-index: 10;

	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 18px;
		border-radius: 50%;
		box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.3);
	}

	p {
		font-family: var(--main-font);
		width: 70%;
		text-align: center;
		font-size: 20px;
		font-weight: 600;
	}
`;

export default EmailSuccessStyled;

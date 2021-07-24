import { useEffect } from 'react';
import { ProgressScrollStyled } from '../styles/styledComponents/ProgressBar';

const ProgressScrollBar = () => {
	useEffect(() => {
		window.addEventListener('scroll', () => {
			console.log(document.documentElement.scrollHeight);
			console.log(document.documentElement.clientHeight);
		});
	}, []);

	return (
		<ProgressScrollStyled scroll={70}>
			<div className='progress__hidden'></div>
		</ProgressScrollStyled>
	);
};

export default ProgressScrollBar;

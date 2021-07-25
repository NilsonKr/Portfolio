import { useEffect, useState } from 'react';
import { ProgressScrollStyled } from '../styles/styledComponents/ProgressBar';

const ProgressScrollBar = () => {
	const [scroll, setScroll] = useState<number>(10);

	const handleScroll = () => {
		const scrollDown = document.documentElement.scrollTop;
		const totalHeigth =
			document.documentElement.scrollHeight - document.documentElement.clientHeight;

		const scrollPorcent = (scrollDown / totalHeigth) * 100;

		console.log('Event');

		if (scrollPorcent > scroll) {
			setScroll(scrollPorcent);
		}
	};

	useEffect(() => {
		if (scroll < 100) {
			window.addEventListener('scroll', handleScroll);
		}

		return () => window.removeEventListener('scroll', handleScroll);
	}, [scroll]);

	return (
		<ProgressScrollStyled scroll={scroll}>
			<div className='progress__hidden'></div>
		</ProgressScrollStyled>
	);
};

export default ProgressScrollBar;

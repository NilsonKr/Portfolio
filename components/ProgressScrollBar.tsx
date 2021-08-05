import useScrollbar from '../hooks/useScrollBar';
import { ProgressScrollStyled } from '../styles/styledComponents/ProgressBar';

const ProgressScrollBar = () => {
	const { scroll } = useScrollbar(10);

	return (
		<ProgressScrollStyled scroll={scroll} aria-label='progress'>
			<div className='progress__hidden'></div>
		</ProgressScrollStyled>
	);
};

export default ProgressScrollBar;

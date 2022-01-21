import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import LandingTechHub from './figures/LandingTechHub';
import { DescriptionStyled, LandingStyled } from '../styles/styledComponents/Landing';

const Landing = ({ landingData }: { landingData: TLanding }) => {
	const theme = useContext<Ttheme>(ThemeContext);

	return (
		<LandingStyled id='landing'>
			<DescriptionStyled>
				<h2 className='desc--greeting'>Hi I'm...</h2>
				<h1 className='desc--name'>NILSON DIAZ</h1>
				<h3 className='desc--work'>Web Developer / Front End</h3>
				<p>
					I build web applications , also i like assume new challenges to get me out of my
					bounds and learn new cool stuff to be able to create interesting stuff with
					interesting technology, I’m a enthusiast of Web and Crypto development.
				</p>
			</DescriptionStyled>
			<div className='landing__thumbnails'>
				<div>
					<img src={landingData.projects.first.X1} alt='First Project Thumbnail' />
				</div>
				<div>
					<img src={landingData.projects.second.X1} alt='Second Project Thumbnail' />
				</div>
				<div>
					<img src={landingData.projects.third.X1} alt='Third Project Thumbnail' />
				</div>
			</div>
			<LandingTechHub image={landingData.figure[theme.current].X1} />
		</LandingStyled>
	);
};

export default Landing;

const Landing = ({ landingData }: { landingData: TLanding }) => {
	return (
		<section className='landing' id='landing'>
			<div className='landing__description'>
				<h2 className='desc--greeting'>Hi I'm...</h2>
				<h1 className='desc--name'>NILSON DIAZ</h1>
				<h3 className='desc--work'>Web Developer / Front End</h3>
				<p>
					I build web applications , i like assume new Challenges to get me out of my
					bounds , & then be able to create interesting stuff with technology, I’m a
					enthusiast of Frontend Development.
				</p>
			</div>
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
			<div className='landing__technologies'>
				<img
					className='landing--figure'
					src={landingData.figure.X1}
					alt='Technologies Hub'
				/>
				<div className='landing__techhub'>
					<div className='glass--wrapper techhub--javascript'>
						<img className='' src='/images/javascript.svg' alt='Javascript' />
					</div>
					<div className='glass--wrapper techhub--react'>
						<img className='' src='/images/react.svg' alt='React' />
					</div>
					<div className='glass--wrapper techhub--node'>
						<img className='' src='/images/nodejs.svg' alt='Node js' />
					</div>
					<div className='glass--wrapper techhub--css'>
						<img className='' src='/images/css.svg' alt='Css' />
					</div>
					<div className='glass--wrapper techhub--next'>
						<img className='' src='/images/nextjs.svg' alt='Next js' />
					</div>
					<div className='glass--wrapper techhub--redux'>
						<img className='' src='/images/redux.svg' alt='Redux' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Landing;

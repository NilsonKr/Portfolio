import React from 'react';

const LandingTechHub = ({ image }: { image: string }) => {
	return (
		<div className='landing__technologies'>
			<img className='landing--figure' src={image} alt='Technologies Hub' />
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
	);
};

export default LandingTechHub;

import React from 'react';

const SwitchTheme = () => {
	return (
		<label className='theme__handler'>
			<input type='checkbox' />
			<span className='theme--pointer'></span>
			<div className='theme--options'>
				<img src='/images/Sun.svg' alt='Ligth Mode' />
				<img src='/images/Moon.svg' alt='Dark Mode' />
			</div>
		</label>
	);
};

export default SwitchTheme;

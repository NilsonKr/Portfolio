import React from 'react';

import Moon from './SVGIcons/moon';
import Sun from './SVGIcons/sun';

import SwitchPointer from 'styles/styledComponents/SwitchTheme';

const SwitchTheme = ({ iconColor }: { iconColor: string }) => {
	return (
		<label className='theme__handler'>
			<input type='checkbox' />
			<SwitchPointer className='theme--pointer'></SwitchPointer>
			<div className='theme--options'>
				<Sun color={iconColor} size='25' />
				<Moon color={iconColor} size='25' />
			</div>
		</label>
	);
};

export default SwitchTheme;

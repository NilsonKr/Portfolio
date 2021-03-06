import { useContext, useRef } from 'react';
import { changeThemeContext } from '../pages/_app';

import Moon from './SVGIcons/moon';
import Sun from './SVGIcons/sun';

import SwitchPointer from 'styles/styledComponents/SwitchTheme';

const SwitchTheme = ({ iconColor }: { iconColor: string }) => {
	const switchTheme = useContext<TchangeTheme | null>(changeThemeContext);
	const pointer = useRef<HTMLElement>(null);

	return (
		<label className='theme__handler'>
			<input
				type='checkbox'
				onClick={() => switchTheme?.handleSwitchTheme(pointer.current as HTMLElement)}
			/>
			<SwitchPointer className='theme--pointer' ref={pointer}></SwitchPointer>
			<div className='theme--options'>
				<Sun color={iconColor} size='25' />
				<Moon color={iconColor} size='25' />
			</div>
		</label>
	);
};

export default SwitchTheme;

import React, { ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { changeThemeContext } from '../../pages/_app';

const theme = {
	ligth: {
		background: '#fff',
		textMain: '#000',
		textSecond: '#9e9e9e',
		current: 'ligth',
	},
	dark: {
		background: '#1d1d1d',
		textMain: '#fff',
		textSecond: '#cfcfcfcf',
		current: 'dark',
	},
};

function ThemeMockProvider({ children }: { children: ReactNode }) {
	const [style, setStyle] = useState<TthemeStyles>('ligth');

	const handleSwitchTheme = (pointer: HTMLElement) => {
		if (style === 'ligth') {
			setStyle('dark');
			pointer.style.animation = 'switch 1.5s forwards';
		} else {
			pointer.style.animation = 'inverseSwitch 1s';
			setStyle('ligth');
		}
	};

	return (
		<>
			<ThemeProvider theme={theme[style]}>
				<changeThemeContext.Provider value={{ handleSwitchTheme }}>
					{children}
				</changeThemeContext.Provider>
			</ThemeProvider>
		</>
	);
}

export default ThemeMockProvider;

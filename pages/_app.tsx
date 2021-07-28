import React, { useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import '../styles/global.css';
import '../styles/animations.css';
import '../styles/components/HeaderMobile.css';
import '../styles/components/HeaderDesktop.css';
import '../styles/components/SwitchTheme.css';
import '../styles/components/Landing.css';
import '../styles/components/LandingResponsive.css';
import '../styles/components/Projects.css';
import '../styles/components/ProjectsResponsive.css';
import '../styles/components/Contact.css';
import '../styles/components/ContactResponsive.css';
import '../styles/components/Loader.css';

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

//Expose HandleSwitchTheme function to any components
export const changeThemeContext = React.createContext<TchangeTheme | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
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
			<Head>
				<title>Nilson Diaz</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<ThemeProvider theme={theme[style]}>
				<changeThemeContext.Provider value={{ handleSwitchTheme }}>
					<Component {...pageProps} />
				</changeThemeContext.Provider>
			</ThemeProvider>
		</>
	);
}

export default MyApp;

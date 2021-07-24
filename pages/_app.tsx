import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import '../styles/global.css';
import '../styles/components/HeaderMobile.css';
import '../styles/components/HeaderDesktop.css';
import '../styles/components/SwitchTheme.css';
import '../styles/components/Landing.css';
import '../styles/components/LandingResponsive.css';
import '../styles/components/Projects.css';
import '../styles/components/ProjectsResponsive.css';
import '../styles/components/Contact.css';
import '../styles/components/ContactResponsive.css';

const theme = {
	ligth: {
		background: '#fff',
		textMain: '#000',
		textSecond: '#9e9e9e',
	},
	dark: {
		background: '#1d1d1d',
		textMain: '#fff',
		textSecond: '#cfcfcfcf',
	},
};

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme['dark']}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;

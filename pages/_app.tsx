import { AppProps } from 'next/app';

import '../styles/global.css';
import '../styles/components/Header.css';
import '../styles/components/HeaderMobile.css';
import '../styles/components/HeaderDesktop.css';
import '../styles/components/SwitchTheme.css';
import '../styles/components/Landing.css';
import '../styles/components/LandingResponsive.css';
import '../styles/components/Projects.css';
import '../styles/components/ProjectsResponsive.css';
import '../styles/components/Contact.css';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;

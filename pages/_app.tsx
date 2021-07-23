import { AppProps } from 'next/app';

import '../styles/global.css';
import '../styles/components/Header.css';
import '../styles/components/HeaderMobile.css';
import '../styles/components/HeaderDesktop.css';
import '../styles/components/SwitchTheme.css';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;

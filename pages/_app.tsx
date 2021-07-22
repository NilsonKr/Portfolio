import { AppProps } from 'next/app';

import '../styles/global.css';
import '../styles/components/Header.css';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;

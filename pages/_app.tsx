/* eslint-disable import/no-named-as-default */
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Footer from 'components/common/Footer/Footer';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <Component {...pageProps} />
        <Footer />
    </>
);

export default MyApp;

/* eslint-disable import/no-unresolved */
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Navbar from 'components/common/navbar';
import Footer from 'components/common/footer';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        
    </>
);

export default MyApp;

/* eslint-disable import/no-unresolved */
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Navbar from 'components/common/navbar';
import Footer from 'components/common/Footer/footer';
import Home from './Home/Index';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <Navbar />
        <Component {...pageProps} />
        <Home />
        <Footer />
    </>
);

export default MyApp;

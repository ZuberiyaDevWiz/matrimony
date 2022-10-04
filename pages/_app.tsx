import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Navbar from 'components/common/navbar';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <Navbar />

        <Component {...pageProps} />
    </>
);

export default MyApp;

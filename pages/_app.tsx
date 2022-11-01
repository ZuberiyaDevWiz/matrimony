import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Footer from 'components/common/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <Component {...pageProps} />
        <Footer />
        <Toaster position="bottom-right" />
    </>
);

export default MyApp;

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from 'components/common/navbar';
// import Home from 'components/page/Home/Index';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <Navbar />
        {/* <Home/> */}
        <Component {...pageProps} />
    </>
);

export default MyApp;

/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layouts/PreLoader";
import { Provider } from 'react-redux';
import store from '../src/store';
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  return (
    <Fragment>
      <Head>
        <title>WDT - Kindergarten</title>
        <link rel="shortcut icon" href="assets/images/favicon.ico" />
        <link
          rel="apple-touch-icon-precomposed"
          href="assets/images/favicon.ico"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Salsa&display=swap"
          rel="stylesheet"
        />
      </Head>
      {loader && <PreLoader />}
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
};
export default App;

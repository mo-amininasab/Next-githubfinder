import React, { Fragment } from 'react';
import Head from 'next/head';

import '../styles/globals.css';

import Navbar from '../components/layout/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
          integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <Navbar />
      {/* // Todo: insert a layout instead div */}
      <div className="mx-auto w-11/12 md:w-3/4 mt-6 mb-12">
        <Component {...pageProps} />
      </div>
    </Fragment>
  );
}

export default MyApp;

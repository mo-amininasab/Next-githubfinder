import React from 'react';
import Head from 'next/head';

import Search from '../components/users/search';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>GitHub Finder</title>
      </Head>
      <Search />
    </div>
  );
};

export default HomePage;

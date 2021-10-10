import React from 'react';
import Head from 'next/head';

import Search from '../components/users/search';
import Users from '../components/users/Users';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>GitHub Finder</title>
      </Head>
      <Search />
      <Users />
    </div>
  );
};

export default HomePage;

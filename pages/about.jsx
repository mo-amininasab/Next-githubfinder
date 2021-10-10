import React, {Fragment} from 'react'
import Head from 'next/head';

const AboutPage = () => {
  return (
    <Fragment>
      <Head>
        <title>About</title>
      </Head>
      <h1 className="text-4xl font-semibold mb-2">About This App</h1>
      <p>App to search Github users</p>
      <p>Version: 1.0.0</p>
    </Fragment>
  )
}

export default AboutPage

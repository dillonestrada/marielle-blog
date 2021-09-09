import '../styles/globals.css';
import Navbar from '../components/navbar';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Navbar />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;

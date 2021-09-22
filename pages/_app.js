import '../styles/globals.css';
import Navbar from '../components/navbar';
import React from 'react';

// Store Strapi Global object in context
// export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;

  return (
    <React.Fragment>
      <Navbar />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;

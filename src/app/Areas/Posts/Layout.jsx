import React, { PropTypes } from 'react';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import './Layout.css';

function Layout(props) {
  return (
    <div className="layout-root teal lighten-5">
      <Header />
      <main className="container">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;

import React, { Component, PropTypes } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import './Layout.css';

export default class Layout extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="layout-root teal lighten-5">
        <Header />
        <main className="container">
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
}

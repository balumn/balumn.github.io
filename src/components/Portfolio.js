import React, { Component } from 'react';
import Header from './Header';
import Resume from './Resume';
import Footer from './Footer';

class Portfolio extends Component {
  render() {
    return (
      <div >
        <Header />
        <Resume />
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
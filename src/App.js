import React, { Component } from 'react';
import Header from './components/Header';
import Resume from './components/Resume';
import Footer from './components/Footer';
class App extends Component {
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

export default App;
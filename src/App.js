import React, { Component } from 'react';
import Header from './components/Header';
import Resume from './components/Resume';
import resumeData from './resumeData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;
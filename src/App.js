import React, { Component } from 'react';
import Portfolio from './components/Portfolio';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div >
        <Router>
          <Switch>
            <Route exact path="/" component={Portfolio} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
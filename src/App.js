import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Home from './components/Home';

function App() {
  return (
    <Router>
        <div className="App">
        <Switch>
          <Route exact path='/' component={() => <Home />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

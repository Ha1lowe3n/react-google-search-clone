import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home/Home';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <h2>SearchPage</h2>
          </Route>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

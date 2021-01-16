import React from 'react';

import './App.css';

import Home from './pages/Home/Home';

function App() {
  return (
    <div className="app">
      <h1>hello</h1>

      {/* Home (the one with the search on) */}
      <Home />

      {/* SearchPage (The result page) */}
    </div>
  );
}

export default App;

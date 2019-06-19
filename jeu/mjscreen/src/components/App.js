import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import '../styles/App.css';

import Landing from './Landing';
import Main from './Main';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Route exact path="/" component={Landing} />
            <Route exact path="/start" component={Main} />
        </BrowserRouter>
    </div>
  );
}

export default App;

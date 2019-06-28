import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Screen from './Screen';

import Phase1 from './Phase1'
import Phase2 from './Phase2'
import Phase3 from './Phase3'

import '../styles/App.css';
import '../styles/Landing.css';

import logo from '../images/logo1.svg';

class Landing extends React.PureComponent {
    render() {
        return (
            <div className="App">
                <div className="Landing">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Link className="Screen-link" target="_blank" to="/screen">Démarrer l'écran</Link>
                    <Link className="Start-link" to="/phase1/introduction">Demarrer</Link>
                </div>
            </div>
        )
    }
}

class App extends React.PureComponent {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Landing} />
                <Route path="/screen" component={Screen} />
                <Route path="/phase1" component={Phase1} />
                <Route path="/phase2" component={Phase2} />
                <Route path="/phase3" component={Phase3} />
            </Router>
        );
    }
}

export default App;

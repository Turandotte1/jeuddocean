import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Introduction from './Introduction'
import Distribution from './Distribution'
import Placement from './Placement'
import Element from './Element'

import Timer from '../Timer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import '../../styles/left-screen-mj.css';
import '../../styles/right-screen-mj.css';
import '../../styles/App.css';

class Phase1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phase: 1
        };

    }

    render() {
        return (
            <div id="mainScreen">
                <Link to="/" className="close-button">
                    <FontAwesomeIcon icon={ faTimes } size="2x" />
                </Link>
                <div className="left">
                    <div className="text-component">
                        <h2 className="phase-name">
                            PHASE 1 - Découverte individuelle (6m30)
                        </h2>
                        <div>
                            <Router>
                                <Route path="/phase1/introduction" component={Introduction}/>
                                <Route path="/phase1/distribution" component={Distribution} />
                                <Route path="/phase1/placement" component={Placement} />
                                <Route path="/phase1/element" component={Element} />
                            </Router>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="timer-wrapper">
                        <Timer phase={{ phase: this.state.phase }}/>
                    </div>
                    <div className="buttons-wrapper">
                        <Link className="rose-button" to="/Phase2/Remplacement">Aller à la phase 2</Link>
                    </div>
                </div>
            </div>
        );
    }
};

export default Phase1;

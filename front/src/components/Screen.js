import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ReactDOM from 'react-dom'

import Timer from './Timer'
import Video from './Video'

import '../styles/Screen.css';
import '../styles/App.css';
import eolienne from '../images/picto-eolienne-blanc.svg';
import tourisme from '../images/picto-tourisme.svg';
import transport from '../images/picto-transport.svg';
import peche from '../images/picto-peche.svg';

import environnement from '../images/picto-environnement-blanc.svg';
import social from '../images/picto-social-blanc.svg';
import economique from '../images/picto-economie-rouge.svg';

import cotes from '../images/cotes-plateau.svg';

class Screen extends Component {
    constructor(props) {
		super(props);
        this.state = {
            answer: "",
        };
    };

    componentDidMount() {
        fetch('http://localhost:3005/calcul')
        .then(res => res.json())
        .then(json =>
            this.setState({
                answer: json,
                isLoading: false,
            })
        )
    };


	render() {
        return (
            <div className="screen-component">
            <Router>
                <Route path="/screen/video" component={Video} />
            </Router>
                <div className="left-screen">
                    <div className="wrapper">
                        <div className="eolienne">
                            <img src={eolienne} alt=""/>
                            <h2>{this.state.answer.vp}</h2>
                        </div>
                        <div className="tourisme">
                            <img src={tourisme} alt=""/>
                            <h2>{this.state.answer.ve}</h2>
                        </div>

                        <div className="transport">
                            <img src={transport} alt=""/>
                            <h2>{this.state.answer.vl}</h2>
                        </div>
                        <div className="peche">
                            <img src={peche} alt=""/>
                            <h2>{this.state.answer.vt}</h2>
                        </div>
                        <div className="plateau-grille">
                            <img className="cotes" src={cotes} alt=""/>
                            <div className="plateau">
                                    <div class="plateau-item one"></div>
                                    <div class="plateau-item two"></div>
                                    <div class="plateau-item three"></div>
                                    <div class="plateau-item four"></div>
                                    <div class="plateau-item five"></div>
                                    <div class="plateau-item six"></div>
                                    <div class="plateau-item one"></div>
                                    <div class="plateau-item two"></div>
                                    <div class="plateau-item three"></div>
                                    <div class="plateau-item four"></div>
                                    <div class="plateau-item five"></div>
                                    <div class="plateau-item six"></div>
                                    <div class="plateau-item one"></div>
                                    <div class="plateau-item two"></div>
                                    <div class="plateau-item three"></div>
                                    <div class="plateau-item four"></div>
                                    <div class="plateau-item five"></div>
                                    <div class="plateau-item six"></div>
                                    <div class="plateau-item one"></div>
                                    <div class="plateau-item two"></div>
                                    <div class="plateau-item three"></div>
                                    <div class="plateau-item four"></div>
                                    <div class="plateau-item five"></div>
                                    <div class="plateau-item six"></div>
                                    <div class="plateau-item one"></div>
                                    <div class="plateau-item two"></div>
                                    <div class="plateau-item three"></div>
                                    <div class="plateau-item four"></div>
                                    <div class="plateau-item five"></div>
                                    <div class="plateau-item six"></div>
                                    <div class="plateau-item one"></div>
                                    <div class="plateau-item two"></div>
                                    <div class="plateau-item three"></div>
                                    <div class="plateau-item four"></div>
                                    <div class="plateau-item five"></div>
                                    <div class="plateau-item six"></div>
                            </div>
                        </div>

                    </div>

            </div>
            <div className="right-screen">
                <div className="right-wrapper">
                    <Timer phase={{ phase: 1 }}/>
                    <div className="text-screen">
                        <h2>Phase 2 :</h2>
                        <p>Placez vos pions avant la fin du temps imparti !</p>
                    </div>
                    <div className="jauges">
                        <div className="environnement">
                            <div></div>
                            <img src={environnement} alt=""/>
                        </div>
                        <div className="social">
                            <div></div>
                            <img src={social} alt=""/>
                        </div>
                        <div className="economique">
                            <div></div>
                            <img src={economique} alt=""/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        );
    }
}

export default Screen;

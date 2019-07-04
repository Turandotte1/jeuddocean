import React, { Component } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Lightbox } from "react-modal-image";

import ElapsedTime from '../Timer/elapsed-time'
import Grid from './Grid'
import Video from '../Video'

import '../../styles/screen-game.css';
import '../../styles/App.css';

import eolienne from '../../images/picto-eolienne-blanc.svg';
import tourisme from '../../images/picto-tourisme.svg';
import transport from '../../images/picto-transport.svg';
import peche from '../../images/picto-peche.svg';
import environnement from '../../images/picto-environnement-blanc.svg';
import social from '../../images/picto-social-blanc.svg';
import economique from '../../images/picto-economie-blanc.svg';

class Screen extends Component {
    constructor(props) {
		super(props);
        this.state = {
            ve: 0,
            vl: 0,
            vt: 0,
            vp: 0,
            vg: 0,
            vs: 0,
            er: 0,
            peche: [],
            eolien: [],
            loisir: [],
            transport: [],
          timeLeft: 390,
          phase: 1,
          isPaused: true,
          reglemente: [],
          interdit: [],
          alea: 0,
          aleaOpen: false
        };
    }

    getImage() {
        axios.get('http://localhost:3005/api/send-image')
        .then(res => {
            this.setState({
                peche: [],
                eolien: [],
                loisir: [],
                transport: []
            });
            let map = res.data;
            let x = 1;
            for (x in map) {
                if (map[x].eolien) {
                    this.setState({
                        eolien: [ ...this.state.eolien, x]
                    });
                }
                if (map[x].peche) {
                    this.setState({
                        peche: [ ...this.state.peche, x]
                    });
                }
                if (map[x].loisir) {
                    this.setState({
                        loisir: [ ...this.state.loisir, x]
                    });
                }
                if (map[x].transport) {
                    this.setState({
                        transport: [ ...this.state.transport, x]
                    });
                }
            }
        })
   }

   getCalcul() {
       axios.get('http://localhost:3005/api/calcul')
       .then(res => {
           let answer = res.data;
           this.setState({
               vp: answer.vp,
               ve : answer.ve,
               vl: answer.vl,
               vt: answer.vt,
               vg: answer.vg,
               vs: answer.vs,
               er: answer.er

           });
       })
   }

   getZoneReglementes() {
       axios.get('http://localhost:3005/api/amp-reglemente')
       .then(res => {
           const reglemente = res.data
           this.setState({reglemente : reglemente})
        });
   }

   getZoneInterdit() {
       axios.get('http://localhost:3005/api/amp-interdit')
       .then(res => {
           const interdit = res.data
           this.setState({interdit : interdit})
        });
   }

  getTime() {
    axios.get('http://localhost:3005/api/time')
      .then(res => {
        const timeInfo = res.data
        this.setState(timeInfo)
      })
  }

  getAlea() {
      axios.get('http://localhost:3005/api/alea')
        .then(res => {
             this.setState({alea : res.data })
             if (this.state.alea > 0) {
                    const interval = setInterval(() => {
                     return (
                         <div className="aleaWrapper">
                             <img className="aleaImage" src={this.state.alea+".png"} alt=""/>
                         </div>
                     )
            }, 1000);
            }
        })
    }


    componentDidMount() {
    const interval = setInterval(() => {
        this.getCalcul();
        this.getImage();
        this.getTime();
        this.getZoneReglementes();
        this.getZoneInterdit();
        this.getAlea();

    }, 1000)
        this.setState({ interval })
    }

    componentWillUnmount() {
        clearInterval(this.state.interval)
        this.setState({ peche: [] })
        this.setState({ eolien: [] })
        this.setState({ loisir: [] })
        this.setState({ transport: [] })
        this.setState({ alea : 0})
        this.setState({interdit : []})
        this.setState({reglemente : [] })
        this.setState({aleaOpen : false})
  }

	render() {
    const { timeLeft, phase, isPaused } = this.state
    if (this.state.aleaOpen == true) {


    }
        return (
            <div className="screen-component">
                <div className="left-screen">
                    <div className="flex-layout">
                        <div className="top-line">
                            <div className="jauges-perso">
                                <img src={eolienne} alt=""/>
                                <div className="jauge-perso eolienne">
                                    <div
                                        style={{ height: `${this.state.ve}%`, backgroundColor: "white" }}
                                        className="filler">
                                    </div>
                                </div>
                            </div>
                            <div className="jauges-perso">
                                <img src={tourisme} alt=""/>
                                <div className="jauge-perso loisir">
                                    <div
                                        style={{ height: `${this.state.vl}%`, backgroundColor: "#7AC363"  }}
                                        className="filler">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-line">
                            <div className="jauges-perso">
                                <img src={transport} alt=""/>
                                <div className="jauge-perso transport">
                                    <div
                                        style={{ height: `${this.state.vt}%`, backgroundColor: "#FFAF23"  }}
                                        className="filler">
                                    </div>
                                </div>
                            </div>
                            <div className="jauges-perso">
                                <img src={peche} alt=""/>
                                <div className="jauge-perso peche">
                                    <div
                                        style={{ height: `${this.state.vp}%`, backgroundColor: "#FF6F72"  }}
                                        className="filler">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Grid
                    eolien={this.state.eolien}
                    peche={this.state.peche}
                    loisir={this.state.loisir}
                    transport={this.state.transport}
                    interdit={this.state.interdit}
                    reglemente={this.state.reglemente}
                />
                </div>
                <div className="right-screen">
                    <div className="right-wrapper">
                        <ElapsedTime phase={phase} timeLeft={timeLeft} />
                        <div className="text-screen">
                            <h2>Phase {phase} :</h2>
                            { phase === 1 ? <p>Choisissez vos rôles et placez vos pions sur les cases au plus fort potentiel</p>
                                : <p>Placez vos pions en tenant compte cette fois des facteurs environnementaux et sociaux</p>
                              }
                        </div>
                        <div className="jauges-globales">
                            <div className="dividor"></div>
                            <div className="jauge-global environnement">
                                <div className="jauge-container">
                                    <div
                                        style={{ height: `${this.state.er}%`, backgroundColor: "white"  }}
                                        className="filler-global">
                                    </div>
                                </div>
                                <img src={environnement} alt=""/>
                            </div>
                            <div className="jauge-global social">
                                <div className="jauge-container">
                                    <div
                                        style={{ height: `${this.state.vs}%`, backgroundColor: "white"  }}
                                        className="filler-global">
                                    </div>
                                </div>
                                <img src={social} alt=""/>
                            </div>
                            <div className="jauge-global economique">
                                <div className="jauge-container">
                                    <div
                                        style={{ height: `${this.state.vg}%`, backgroundColor: "white"  }}
                                        className="filler-global">
                                    </div>
                                </div>
                                <img src={economique} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

class ScreenWrapper extends React.Component {
  state = {
    videoId: 0,
  }
  componentDidMount() {
    const interval = setInterval(() => {
      axios.get('http://localhost:3005/api/videoId')
        .then(res => {
          const { videoId } = res.data
          console.log(videoId)
          this.setState({ videoId })
        })
    }, 1000)
    this.setState({ interval })
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }
  render () {
    const { videoId } = this.state
    if (videoId) {
      return <Video videoId={videoId} />
    }
    return <Screen/>
  }
}

export default ScreenWrapper;

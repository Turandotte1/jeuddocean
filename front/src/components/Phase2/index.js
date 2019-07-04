import React from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { videoLength, } from '../../constants'

import '../../styles/left-screen-mj.css';
import '../../styles/right-screen-mj.css';
import '../../styles/App.css';

import Timer from '../Timer'

function Placement() {
  return (
    <div>
        <div>
            <p className="text-subtitle">Placement</p>
            <div className="weird-thing"></div>
            <div className="main-text">
                <p style={{color: "#1e1d6b", fontWeight: "900", fontStyle: "italic"}}>
                    [Le MJ indique qu’il reste 1 minute /
                        30 secondes pour effectuer les derniers déplacements.
                        Si le placement final est fait avant,
                        il peut leur mettre le doute en leur demandant plusieurs
                        fois qu’ils pensent avoir fait le bon choix.]
                </p>
                <p>
                    Attention, il ne vous reste que [temps] secondes pour placer définitivement vos pions.
                </p>
                <p>
                    Tout changement après ça ne sera plus possible.
                    Toute réclamation ne sera pas entendue. Toute contestation sera royalement ignorée.
                    Êtes-vous sûrs de votre choix ?
                    Pensez-vous vraiment que c’était la bonne solution ?
                    Êtes-vous certains de ne pas regretter ?
                </p>
                <p>De toute façon maintenant, c’est trop tard... </p>
            </div>
            <div className="links">
                <Link to="/phase2/alea" className="lien-text-prev">
                    <FontAwesomeIcon icon={ faArrowCircleLeft } size="3x" />
                </Link>
            </div>
        </div>
    </div>
  );
}
class Alea extends React.Component {
    constructor() {
        super();
        this.onClick = this.handleClick.bind(this);
      }

      handleClick(event) {
          axios.post("http://localhost:3005/api/alea", {})
              .then((response) => {
                    console.log("sucessfuly sent");
               })
              .catch((err) => {
                   console.log("oh no :()");
               });
    }
    render() {
        return (
          <div>
              <div>
                  <p className="text-subtitle">Aléa surgit</p>
                  <div className="weird-thing"></div>
                  <div className="main-text">
                      <p style={{color: "#1e1d6b", fontWeight: "900", fontStyle: "italic"}}>
                          [Attention ! On ne bouge plus !
                              J’attire votre attention sur l’aléa qui vient d’apparaître sur l’écran :
                              (lecture à voix haute de l’aléa)
                              Cela signifie que certaines cases sont impactées…
                              [placement des masques et
                              explication en fonction des effets
                              (perte de pions ou mise à 0 de certaines activités).
                              Il relance la recherche de solution après
                              avoir constaté avec les joueurs les conséquences sur les jauges.
                              Laisser la partie se dérouler.]
                      </p>
                      <button onClick={this.onClick} className="blue-button">
                              Lancer aléa
                      </button>
                  </div>
                  <div className="links">
                      <Link to="/phase2/remplacement" className="lien-text-prev">
                          <FontAwesomeIcon icon={ faArrowCircleLeft } size="3x" />
                      </Link>
                      <Link to="/phase2/placement" className="lien-text-suiv">
                          <FontAwesomeIcon icon={ faArrowCircleRight } size="3x" />
                      </Link>
                  </div>
              </div>
          </div>
        );
      }
}


function Remplacement() {
  return (
      <div>
          <div>
            <p className="text-subtitle">Remplacement</p>
            <div className="weird-thing"></div>
            <div className="main-text">
                <p style={{color: "#1e1d6b", fontWeight: "900", fontStyle: "italic"}}>
                    [Les joueurs sont invités à replacer leurs pions et à discuter.
                    L’objectif est de comprendre puis tenir compte des facteurs
                    sociaux et environnementaux. Ils peuvent suivre l’évolution des jauges en temps réel.]
                </p>
                <p>
                    Peut-être serait-il judicieux d’envisager de déménager vos pions,
                    d’aller là où il n’y a encore personne.
                    On ne va pas se mentir, mais trois activités sur une seule et même case,
                    cela me semble assez chargé, qu’en pensez-vous ?
                    Vous pouvez observer les effets de vos placements en temps réel sur les jauges à l’écran.
                </p>
                <p>
                    Je vous rappelle que plusieurs activités sur une case
                    se concurrencent et cela fait baisser la valeur de chacun.
                    Attention aussi aux risques sociaux et à la sensibilité environnementale,
                    il pourrait y avoir de mauvaises surprises !
                </p>
                <p style={{color: "#1e1d6b", fontWeight: "900", fontStyle: "italic"}}>
                    [Les joueurs doivent discuter entre eux pour
                    trouver des compromis. L’animateur les incite à trouver des arrangements,
                    les alerte le cas échéant sur le rapport à l’environnement et
                    à la sensibilité au changement climatique ou à l’acceptabilité sociale.
                    Le résultat s’affiche au fur et à mesure à l’écran via les jauges.]
                </p>
                <p>
                    Je sais que vous ne vous connaissez pas
                    et que vous êtes très timides,
                    je comprends aussi que je puisse vous intimider, je suis très impressionnant.
                    Néanmoins, il serait judicieux d’envisager de dialoguer
                    et de discuter pour trouver des compromis...
                </p>
                <p style={{color: "#1e1d6b", fontWeight: "900", fontStyle: "italic"}}>
                    [Au moment où les joueurs fixent une nouvelle configuration
                    d’exploitation du territoire, un aléa surgit,
                    déclenché par le maître du jeu. Il tient compte du nouveau
                    positionnement des pions. Il s’agit d’un aléa social
                    ou environnemental remettant le jeu de nouveau en question. ]
                </p>
            </div>
            <div className="links">
                <Link to="/phase2/alea" className="lien-text-first">
                    <FontAwesomeIcon icon={ faArrowCircleRight } size="3x" />
                </Link>
            </div>
        </div>
    </div>
  );
}

class Phase2 extends React.Component {
  state = {}
  transitionToPhase3 = () => {
    axios.post('http://localhost:3005/api/videoId', { videoId: 3})
    setTimeout(() => {
      this.setState({ redirectToPhase3: true })
    }, videoLength[3] * 1000)
  }
  render() {
    if (this.state.redirectToPhase3) {
      console.log('redirecting to phase 2')
      return <Redirect to="/phase3/projection"/>
    }
  return (
      <div id="mainScreen">
          <Link to="/" className="close-button">
              <FontAwesomeIcon icon={ faTimes } size="2x" />
          </Link>
          <div className="left">
              <div className="text-component">
                  <h2 className="phase-name">
                      PHASE 2 - Action collective (9m)
                  </h2>
                  <div>
                      <div className="links">
                          <Router>
                              <Route path="/phase2/remplacement" component={Remplacement} />
                              <Route path="/phase2/alea" component={Alea} />
                              <Route path="/phase2/placement" component={Placement} />
                          </Router>
                      </div>
                  </div>
              </div>
          </div>
          <div className="right">
              <div className="timer-wrapper">
                  <Timer phase={{ phase: 2 }} onEnd={this.transitionToPhase3}/>
              </div>
              <div className="buttons-wrapper">
                    <Link className="rose-button" to="/phase3/projection">Aller à la phase 3</Link>
              </div>
          </div>
      </div>
  );
  }
};

export default Phase2;

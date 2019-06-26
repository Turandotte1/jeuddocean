import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

import '../styles/left-screen-mj.css';
import '../styles/right-screen-mj.css';
import '../styles/App.css';

import Timer from './Timer'



function Validation() {
  return (
    <div>
        <div>
            <p className="text-subtitle">Placement des pions</p>
            <div className="weird-thing"></div>
            <div className="main-text">
                <p>
                    Bonjour à tous et toutes et bienvenue dans cette session
                    de jeu Opération Océan dont le thème est le développement
                    durable. Avant de commencer, laissez-moi me présenter
                    LE MJ DÉCLINE SON IDENTITÉ RÉELLE.
                    J’endosserai tour à tour un rôle de guide,
                    d’ami, de confident, d’ancre dans votre océan de détresse,
                    mais également le rôle de l’environnement, qui,
                    vous le verrez, ne sera pas toujours très tendre...
                    Je resterai impartial et particulièrement objectif,
                    pas la peine d’essayer de me soudoyer,
                    — quoique j’accepte les chocolats et les chèques.
                </p>
                <div className="links">
                    <Link to="/phase2/placement" className="lien-text-prev">
                        <FontAwesomeIcon icon={ faArrowCircleLeft } size="3x" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}

function Placement() {
  return (
    <div>
        <div>
            <p className="text-subtitle">Element perturbateur</p>
            <div className="weird-thing"></div>
            <div className="main-text">
                <p>
                    Bonjour à tous et toutes et bienvenue dans cette session
                    de jeu Opération Océan dont le thème est le développement
                    durable. Avant de commencer, laissez-moi me présenter
                    LE MJ DÉCLINE SON IDENTITÉ RÉELLE.
                    J’endosserai tour à tour un rôle de guide,
                    d’ami, de confident, d’ancre dans votre océan de détresse,
                    mais également le rôle de l’environnement, qui,
                    vous le verrez, ne sera pas toujours très tendre...
                    Je resterai impartial et particulièrement objectif,
                    pas la peine d’essayer de me soudoyer,
                    — quoique j’accepte les chocolats et les chèques.
                </p>
                <div className="links">

                    <Link to="/phase2/alea" className="lien-text-prev">
                        <FontAwesomeIcon icon={ faArrowCircleLeft } size="3x" />
                    </Link>
                    <Link to="/phase2/validation" className="lien-text-suiv">
                        <FontAwesomeIcon icon={ faArrowCircleRight } size="3x" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}

function Alea() {
  return (
    <div>
        <div>
            <p className="text-subtitle">Distribution des rôles</p>
            <div className="weird-thing"></div>
            <div className="main-text">
                <p>
                    Bonjour à tous et toutes et bienvenue dans cette session
                    de jeu Opération Océan dont le thème est le développement
                    durable. Avant de commencer, laissez-moi me présenter
                    LE MJ DÉCLINE SON IDENTITÉ RÉELLE.
                    J’endosserai tour à tour un rôle de guide,
                    d’ami, de confident, d’ancre dans votre océan de détresse,
                    mais également le rôle de l’environnement, qui,
                    vous le verrez, ne sera pas toujours très tendre...
                    Je resterai impartial et particulièrement objectif,
                    pas la peine d’essayer de me soudoyer,
                    — quoique j’accepte les chocolats et les chèques.
                </p>
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
    </div>
  );
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

const Phase2 = () => {
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
                              <Route path="/phase2/validation" component={Validation} />
                          </Router>
                      </div>
                  </div>
              </div>
          </div>
          <div className="right">
              <div className="timer-wrapper">
                  <Timer phase={{ phase: 2 }}/>
              </div>
              <div className="buttons-wrapper">
                  <button className="rose-button" onClick="alea">
                      vidéo
                  </button>
                  <button className="rose-button"
                      onClick={ () =>{ alert('alert'); }}>
                      <Link to="/phase3/projection">Aller à la phase 3</Link>
                  </button>
                  <button className="rose-button">Prendre une photo du plateau</button>
              </div>
          </div>
      </div>
  );
};

export default Phase2;

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
              <p className="text-subtitle">Introduction - Explications du but du jeu - Explications du fonctionnement</p>
              <div className="weird-thing"></div>
              <div className="main-text">
                  <p>
                      Bonjour à tous et toutes et bienvenue dans cette session
                      de jeu Opération Océan dont le thème est le développement
                      durable. Avant de commencer, laissez-moi me présenter.
                  </p>
                  <p style={{color: "#1e1d6b", fontWeight: "900", fontStyle: "italic"}}> [LE MJ DÉCLINE SON IDENTITÉ RÉELLE.]</p>
                  <p>
                      J’endosserai tour à tour un rôle de guide,
                      d’ami, de confident, d’ancre dans votre océan de détresse,
                      mais également le rôle de l’environnement, qui,
                      vous le verrez, ne sera pas toujours très tendre...
                      Je resterai impartial et particulièrement objectif,
                      pas la peine d’essayer de me soudoyer,
                      — quoique j’accepte les chocolats et les chèques.
                  </p>
                  <p style={{color: "#1e1d6b", fontWeight: "900", fontStyle: "italic"}}>
                      [Lancement de la vidéo d’introduction: La mer est une formidable
                      source d’opportunité : pêche, énergie éolienne,
                      transport maritime et loisirs y trouvent du
                      potentiel pour se développer.
                      C’est bon pour l’économie, c’est bon pour l’emploi. — Mot d’ordre : le gain, le gain, le gain.]
                  </p>
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
                  <button className="rose-button" onClick="new Video">
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

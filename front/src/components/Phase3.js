import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

import '../styles/left-screen-mj.css';
import '../styles/right-screen-mj.css';
import '../styles/App.css';

import Timer from './Timer'

function Recompense() {
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
                    <Link to="/phase3/projection" className="lien-text-prev">
                        <FontAwesomeIcon icon={ faArrowCircleLeft } size="3x" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}

function Projection() {
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
                  <Link to="/phase3/recompense" className="lien-text-first">
                      <FontAwesomeIcon icon={ faArrowCircleRight } size="3x" />
                  </Link>
              </div>
          </div>
      </div>
  );
}

const Phase3 = () => {
  return (
      <div id="mainScreen">
          <Link to="/" className="close-button-phase3">
              <FontAwesomeIcon icon={ faTimes } size="2x" />
          </Link>
          <div className="left-phase3">
              <div className="text-component">
                  <h2 className="phase-name">
                      PHASE 3 - Mise à l'epreuve de la situation(3m)
                  </h2>
                  <div>
                      <div className="links">
                          <Router>
                              <Route path="/phase3/projection" component={Projection} />
                              <Route path="/phase3/recompense" component={Recompense} />
                          </Router>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Phase3;

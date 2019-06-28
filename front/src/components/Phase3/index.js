import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

import '../../styles/left-screen-mj.css';
import '../../styles/right-screen-mj.css';
import '../../styles/App.css';

import Timer from '../Timer'

function Recompense() {
  return (
    <div>
        <div>
            <p className="text-subtitle">Récompense</p>
            <div className="weird-thing"></div>
            <div className="main-text">
                <p style={{color: "#1e1d6b", fontWeight: "900", fontStyle: "italic"}}>
                    [Deux types de récompenses selon
                        que les jauges donnent un développement durable atteint seulement
                        à l’issue du placement final ou également à long terme.
                        - Ceux qui gagnent le pas de temps : un poster de phare et un T-shirt opération océan.
                        - Lot de consolation pour ceux qui étaient gagnants avant de lancer la simulation finale, mais perdants ensuite : un poster de phare.
                        - Super gagnant (2 par jour) : un beau livre sur les Terres australes et Antarctiques Françaises]
                </p>
            </div>
        </div>
    </div>
  );
}

function Projection() {
  return (
      <div>
          <div>
              <p className="text-subtitle">Validation de la nouvelle configuration</p>
              <div className="weird-thing"></div>
              <div className="main-text">
                  <p style={{color: "#1e1d6b", fontWeight: "900", fontStyle: "italic"}}>
                  [Suite à l’évolution des jauges,
                      le MJ débriefe avec ses joueurs
                      afin de voir s’ils ont réussi à établir
                      une exploitation raisonnée et durable
                      (à l’instant T).
                      Regarder ensemble permet de montrer
                      aux joueurs leurs erreurs.]
                  </p>
                  <p>
                        Félicitations,
                        vos jauges sont équilibrées !
                        [Analyse des jauges à l’instant T]. Mais l’objectif
                        du développement durable est le long terme…
                        Voyons si votre configuration résiste
                        à l’épreuve du temps...
                  </p>
                  <p style={{color: "#1e1d6b", fontWeight: "900", fontStyle: "italic"}}>
                        [ou bien]
                  </p>
                  <p>
                      Dommage, les jauges ne sont pas équilibrées…
                      [Analyse des jauges à l’instant T]
                      Constatons ensemble si votre configuration
                      continue de se dégrader avec l’épreuve du temps...
                  </p>
                  <button onClick="" className="blue-button">
                          Lancer pas de temps
                  </button>
                  <p style={{color: "#1e1d6b", fontWeight: "900", fontStyle: "italic"}}>
                      [Afin de voir si le schéma d’exploitation est
                          durable, la situation actuelle est mise
                          à l’épreuve du temps.
                          Grâce à une projection progressive
                          (pas de temps de 2 ans)
                          montrant les évolutions territoriales et
                          d’exploitation des ressources,
                          les joueurs sont confrontés à l’évolution
                          de la situation jusqu’en 2050.
                          On constate le résultat final.
                          Une jauge en dessous de 80 et tout
                          le monde a perdu. Les trois autour de 100,
                          les joueurs ont gagné collectivement.
                          Au dessus de 110, c’est la gloire !]
                  </p>
              </div>
              <div className="links">
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

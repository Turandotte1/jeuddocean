import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../../../styles/left-screen-mj.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

export default function Element() {
    return (
      <div>
          <div>
              <p className="text-subtitle">Element perturbateur</p>
              <div className="weird-thing"></div>
              <div className="main-text">
                      <p>
                          Bravo, vous avez pensé à votre propre intérêt mais c’est un désastre pour l’environnement,
                          regardez les jauges. Nous ne sommes pas en situation de développement durable !
                          J’ai donc pris des mesures et mis en place des aires marines protégées...
                      </p>
                      <p style={{color: "#1e1d6b", fontWeight: "900", fontStyle: "italic"}}>
                          [Il doit remplir les valeurs AMP des cases correspondantes aux cases limitées et réglementées : 0 pour limité,
                          0.5 pour réglementé.]
                      </p>
                      <div className="grid-wrapper">
                          <div className="grid-mj">
                              <button className="item1">A1</button>
                              <button className="item2">B1</button>
                              <button className="item3">C1</button>
                              <button className="item4">D1</button>
                              <button className="item5">E1</button>
                              <button className="item6">F1</button>

                              <button className="item7">A2</button>
                              <button className="item8">B2</button>
                              <button className="item9">C2</button>
                              <button className="item10">D2</button>
                              <button className="item11">E2</button>
                              <button className="item12">F2</button>

                              <button className="item13">A3</button>
                              <button className="item14">B3</button>
                              <button className="item15">C3</button>
                              <button className="item16">D3</button>
                              <button className="item17">E3</button>
                              <button className="item18">F3</button>

                              <div className="item19 island"></div>
                              <button className="item20">B4</button>
                              <button className="item21">C4</button>
                              <button className="item22">D4</button>
                              <button className="item23">E4</button>
                              <button className="item24">F4</button>

                              <button className="item25">B5</button>
                              <button className="item26">C5</button>
                              <button className="item27">D5</button>
                              <button className="item28">E5</button>
                              <button className="item29">F5</button>

                              <div className="item30 island"></div>
                              <button className="item31">C6</button>
                              <button className="item32">D6</button>
                              <button className="item33">F6</button>
                          </div>
                          <div className="grid-text">
                              <p>
                                  Comme vous pouvez le constater, j’ai mis 2 protections fortes.
                                  Désormais, plus d’activités sur ces deux cases [les désigner], interdit !
                                  Elles sont limitées et tous les joueurs sont cordialement invités à retirer leurs pions de la case,
                                  il n’est plus possible de rester ici.
                              </p>
                              <p>
                                  J’ai aussi placé 4 protections pour réglementer les activités [les désigner]
                                  : vous pouvez y rester, mais vous gagnerez moins, pas de chance.
                                  En revanche, la valeur environnementale ne sera pas touchée par votre activité et vous n’aurez aucun risque à craindre.
                              </p>
                          </div>
                      </div>
              </div>
              <div className="links">
                  <Link to="/phase1/placement" className="lien-text-prev">
                      <FontAwesomeIcon icon={ faArrowCircleLeft } size="3x" />
                  </Link>
              </div>
          </div>
      </div>
    );
}

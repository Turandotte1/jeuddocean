import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

import '../styles/left-screen-mj.css';
import '../styles/right-screen-mj.css';
import '../styles/App.css';


import Timer from './Timer'

function Element() {
  return (
    <div>
        <div>
            <p className="text-subtitle">Element perturbateur</p>
            <div className="weird-thing"></div>
            <div className="main-text">
                <div className="mjText">
                    <p>
                        Bravo, vous avez pensé à votre propre intérêt mais c’est un désastre pour l’environnement,
                        regardez les jauges. Nous ne sommes pas en situation de développement durable !
                        J’ai donc pris des mesures et mis en place des aires marines protégées...
                    </p>
                    <p style={{color: "#1e1d6b", fontWeight: "900", fontStyle: "italic"}}>
                        [Il doit remplir les valeurs AMP des cases correspondantes aux cases limitées et réglementées : 0 pour limité,
                        0.5 pour réglementé.]
                    </p>
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
                    <div className="grid-wrapper">
                        <div className="grid-mj">
                            <div className="item1">A1</div>
                            <div className="item2">B1</div>
                            <div className="item3">C1</div>
                            <div className="item4">D1</div>
                            <div className="item5">E1</div>
                            <div className="item6">F1</div>

                            <div className="item7">A2</div>
                            <div className="item8">B2</div>
                            <div className="item9">C2</div>
                            <div className="item10">D2</div>
                            <div className="item11">E2</div>
                            <div className="item12">F2</div>

                            <div className="item13">A3</div>
                            <div className="item14">B3</div>
                            <div className="item15">C3</div>
                            <div className="item16">D3</div>
                            <div className="item17">E3</div>
                            <div className="item18">F3</div>

                            <div className="item19 island"></div>
                            <div className="item20">B4</div>
                            <div className="item21">C4</div>
                            <div className="item22">D4</div>
                            <div className="item23">E4</div>
                            <div className="item24">F4</div>

                            <div className="item25">B5</div>
                            <div className="item26">C5</div>
                            <div className="item27">D5</div>
                            <div className="item28">E5</div>
                            <div className="item29">F5</div>

                            <div className="item30 island"></div>
                            <div className="item31">C6</div>
                            <div className="item32">D6</div>
                            <div className="item33">F6</div>
                        </div>
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

function Placement() {
  return (
    <div>
        <div>
            <p className="text-subtitle">Placement des pions</p>
            <div className="weird-thing"></div>
            <div className="main-text">
                <div className="mjText">
                    <p style={{color: "#1e1d6b", fontWeight: "900", fontStyle: "italic"}}>
                        [Le maître du jeu invite les joueurs à placer les pions sur la carte.
                        Il veille à ce qu’il y ait bien un pion par joueur et par case.
                        Il encourage le placement sur les cases ayant le plus de potentiel pour leur activité.
                        L’accent est mis sur le gain et l’économie.]
                    </p>
                    <p>
                        Je vous invite à placer l’intégralité de vos pions sur la carte,
                        à raison d’un pion par joueur par case.
                        Deux choses avant de commencer : la première : n’oubliez pas que pour faire croître votre activité,
                        il vous faut privilégier le gain et donc les cases à fort potentiel.
                        La seconde : sur une seule case, il n’y a pas assez d’encoches pour tout le monde… Allez-y !
                    </p>
                    <p>
                        Vous n’avez plus que [TEMPS] secondes pour vous placer...
                    </p>
                    <p style={{color: "#1e1d6b", fontWeight: "900", fontStyle: "italic"}}>
                        [Lorsque les pions sont placés, une vidéo alertant les joueurs sur les risques
                        et les impacts écologiques et sociaux interrompt la partie.
                         L’objectif est à la fois de les alerter et à la fois d’attirer leur attention sur les jauges de développement
                         durable à l’écran.]
                    </p>
                </div>
            </div>
            <div className="links">
                <Link to="/phase1/distribution" className="lien-text-prev">
                    <FontAwesomeIcon icon={ faArrowCircleLeft } size="3x" />
                </Link>
                <Link to="/phase1/element" className="lien-text-suiv">
                    <FontAwesomeIcon icon={ faArrowCircleRight } size="3x" />
                </Link>
            </div>
        </div>
    </div>
  );
}

function Distribution() {
  return (
    <div>
        <div>
            <p className="text-subtitle">Distribution des rôles</p>
            <div className="weird-thing"></div>
            <div className="main-text">
                <p style={{color: "#1e1d6b", fontWeight: "900", fontStyle: "italic"}}>
                    [Les joueurs peuvent choisir leur rôle. S’ils ne sont pas investis,
                    c’est au maître du jeu de les attribuer. Les rôles sont distribués
                    via une carte d’identité. Ils sont invités à prendre connaissance
                    des cartes et à poser les questions qu’ils désirent.
                    Il est important qu’ils comprennent le rôle qu’ils vont incarner.]
                </p>
                <p>
                    Afin que notre jeu se déroule dans les meilleures conditions,
                    je vous invite à choisir le rôle qui vous est le plus familier,
                    celui que vous endosserez avec le plus de bonheur et de passion,
                    ce métier idéal auquel vous rêvez depuis l’enfance.
                    Travailler dans les domaines de la pêche, de l’éolien, du transport maritime ou des loisirs ?
                    Évidemment, si vous ne parvenez pas à vous décider,
                    je me chargerai de distribuer les cartes d’identités et si alors votre rôle ne vous convient pas,
                    eh bien, il sera trop tard pour en changer…
                </p>
                <p>
                    Maintenant, n’hésitez pas à prendre connaissance de votre rôle.
                    Qui êtes-vous, que voulez-vous, quelles sont vos ambitions,
                    vos rêves, vos envies ?
                    Prenez connaissance de toutes les informations qui vous semblent primordiales.
                    Quant à moi, je suis à votre entière disposition pour toute question,
                    interrogation, revendication ou en cas de problème relatif au jeu.
                    Évidemment, je tiens à vous rappeler
                    que je ne suis pas en mesure de résoudre les problèmes personnels.
                </p>
            </div>
            <div className="links">
                <Link to="/phase1/introduction" className="lien-text-prev">
                    <FontAwesomeIcon icon={ faArrowCircleLeft } size="3x" />
                </Link>
                <Link to="/phase1/placement" className="lien-text-suiv">
                    <FontAwesomeIcon icon={ faArrowCircleRight } size="3x" />
                </Link>
            </div>
        </div>
    </div>
  );
}

function Introduction() {
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
              </div>
              <div className="links">
                  <Link to="/phase1/distribution" className="lien-text-first">
                      <FontAwesomeIcon icon={ faArrowCircleRight } size="3x" />
                  </Link>
              </div>
          </div>
      </div>
  );
}

const Phase1 = () => {
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
                        <Route path="/phase1/introduction" component={Introduction} />
                        <Route path="/phase1/distribution" component={Distribution} />
                        <Route path="/phase1/placement" component={Placement} />
                        <Route path="/phase1/element" component={Element} />
                    </Router>
                </div>
            </div>
        </div>
        <div className="right">
            <div className="timer-wrapper">
                <Timer phase={{ phase: 1 }}/>
            </div>
            <div className="buttons-wrapper">
                <button className="rose-button" onClick="new Video">
                    vidéo
                </button>
                <button className="rose-button"
                    onClick={ () =>{ alert('alert'); }}>
                    <Link to="/Phase2/Remplacement">Aller à la phase 2</Link>
                </button>
                <button className="rose-button">Prendre une photo du plateau</button>
            </div>
        </div>
    </div>
  );
};

export default Phase1;

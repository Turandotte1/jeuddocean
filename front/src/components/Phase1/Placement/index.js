import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Placement() {
    return (
        <div>
            <div>
                <p className="text-subtitle">Placement des pions</p>
                <div className="weird-thing"></div>
                <div className="main-text">
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
                        <a href className="blue-button">
                            vidéo
                        </a>
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

import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Introduction() {
    return (
        <div>
            <div>
                <p className="text-subtitle">
                    Introduction
                    - Explications du but du jeu
                    - Explications du fonctionnement
                </p>
                <div className="weird-thing"></div>
                <div className="main-text">
                    <p>
                        Bonjour à tous et toutes et bienvenue dans cette session
                        de jeu Opération Océan dont le thème est le développement
                        durable. Avant de commencer, laissez-moi me présenter.
                    </p>
                    <p style={{color: "#1e1d6b", fontWeight: "900", fontStyle: "italic"}}>
                        [LE MJ DÉCLINE SON IDENTITÉ RÉELLE.]
                    </p>
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
                    <a href="/screen/video">Video</a>
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

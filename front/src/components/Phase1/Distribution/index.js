import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Distribution() {
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

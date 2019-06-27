import React from 'react'
import axios from 'axios';
import qs from 'qs';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../../../styles/left-screen-mj.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

class Introduction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            video1: false
        };
        this.startVideo = this.startVideo.bind(this)
    }

    startVideo() {
        this.setState({
            video1: !this.state.video1
        },

        async function() {
            let data = this.state.video1;
            const options = {
                  method: 'POST',
                  url: 'http://localhost:3005/api/start-video'
            };
            axios(data, options)

            .then(function (switcher) {
               console.log(switcher);
             })
             .catch(function (error) {
                 console.log(error);
             })
         })
    }

    render() {
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
                    <button onClick={this.startVideo} className="blue-button">
                            {this.state.video1 ? 'Stop' : 'Vidéo' }
                    </button>
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
}

export default Introduction;

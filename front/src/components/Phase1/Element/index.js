import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'

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
                    <button onClick={axios.post('http://localhost:3005/api/amp', {} )} className="blue-button">
                          Reglémenter les zones
                    </button>
                    <p>
                        Comme vous pouvez le constater, il y a 2 protections fortes.
                        Désormais, plus d’activités sur ces deux cases [les désigner], interdit !
                        Elles sont limitées et tous les joueurs sont cordialement invités à retirer leurs pions de la case,
                        il n’est plus possible de rester ici.
                    </p>
                    <p>
                        Il y aussi 4 protections pour réglementer les activités [les désigner]
                        : vous pouvez y rester, mais vous gagnerez moins, pas de chance.
                        En revanche, la valeur environnementale ne sera pas touchée par votre activité et vous n’aurez aucun risque à craindre.
                    </p>
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

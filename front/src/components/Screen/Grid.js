import React from 'react';

import pionEolien from '../../images/pion-eolien.svg';
import pionPeche from '../../images/pion-peche.svg';
import pionTourisme from '../../images/pion-tourisme.svg';
import pionTransport from '../../images/pion-transport.svg';

import cotes from '../../images/cotes-plateau.svg';


export default function Grid(props) {
    var multiObj = {
        eolien: props.eolien,
        peche: props.peche,
        loisir: props.loisir,
        transport: props.transport
    }

    console.log("CHECK is "+ props.reglemente)
    console.log("CACA"+ props.reglemente.includes(13))
    return (
        <div className="plateau">
            <img className="cotes" src={cotes} alt=""/>
            <div className="plateau-grid">
                <div className="island plateau-item"></div>
                <div className="island plateau-item"></div>
                <div className="island plateau-item"></div>
                <div
                    style={props.reglemente.includes(3) ? { backgroundColor: "#ff6f72"} : null }
                    className="plateau-item">A3
                </div>
                <div className="plateau-item">A2</div>
                <div className="plateau-item">A1</div>
                <div className="island plateau-item"></div>
                <div
                    style={props.reglemente.includes(8) ? { backgroundColor: "#ff6f72"} : null }
                    className="plateau-item">B5
                </div>
                <div
                    style={props.interdit.includes(7) ? { backgroundColor: "#c0392b"} : null }
                    className="plateau-item">B4
                </div>
                <div className="plateau-item">B3</div>
                <div className="plateau-item">B2</div>
                <div className="plateau-item">B1</div>
                <div className="island plateau-item"></div>
                <div
                    style={props.reglemente.includes(13) ? { backgroundColor: "#ff6f72"} : null }
                    className="plateau-item">C5
                </div>
                <div
                    style={props.interdit.includes(12) ? { backgroundColor: "#c0392b"} : null }
                    className="plateau-item">C4
                </div>
                <div
                    style={props.reglemente.includes(11) ? { backgroundColor: "#ff6f72"} : null }
                    className="plateau-item">C3
                </div>
                <div className="plateau-item">C2</div>
                <div className="plateau-item">C1</div>
                <div
                    style={props.reglemente.includes(19) ? { backgroundColor: "#ff6f72"} : null }
                    className="plateau-item">D6
                </div>
                <div
                    style={props.reglemente.includes(18) ? { backgroundColor: "#ff6f72"} : null }
                    className="plateau-item">D5
                </div>
                <div className="plateau-item">D4</div>
                <div
                    style={props.interdit.includes(16) ? { backgroundColor: "#c0392b"} : null }
                    className="plateau-item">D3
                </div>
                <div className="plateau-item">D2</div>
                <div className="plateau-item">D1</div>
                <div
                    style={props.reglemente.includes(23) ? { backgroundColor: "#ff6f72"} : null }
                    className="plateau-item">E6
                </div>
                <div
                    style={props.reglemente.includes(22) ? { backgroundColor: "#ff6f72"} : null }
                    className="plateau-item">E5
                </div>
                <div
                    style={props.reglemente.includes(21) ? { backgroundColor: "#ff6f72" } : null }
                    className="plateau-item">E4
                </div>
                <div className="island plateau-item"></div>
                <div className="island plateau-item"></div>
                <div className="plateau-item">E1</div>
                <div className="plateau-item">F6</div>
                <div className="plateau-item">F5</div>
                <div className="plateau-item">F4</div>
                <div
                    style={props.reglemente.includes(26) ? { backgroundColor: "#ff6f72" } : null }
                    className="plateau-item">F3
                </div>
                <div class="plateau-item five">F2</div>
                <div class="plateau-item six">F1</div>
            </div>

      </div>
    )
}

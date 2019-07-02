import React from 'react';

import pionEolien from '../../images/pion-eolien.svg';
import pionPeche from '../../images/pion-peche.svg';
import pionLoisir from '../../images/pion-tourisme.svg';
import pionTransport from '../../images/pion-transport.svg';

import cotes from '../../images/cotes-plateau.svg';


export default function Grid(props) {
    console.log(props.eolien.includes("8"))

    return (
        <div className="plateau">
            <img className="cotes" src={cotes} alt=""/>
            <div className="plateau-grid">
                <div className="island plateau-item"></div>
                <div className="island plateau-item"></div>
                <div className="island plateau-item"></div>
                <div
                    style={props.reglemente.includes(3) ? { backgroundColor: "#ff6f72"} : null }
                    className="plateau-item">
                    <img src={props.eolien.includes("3") ?  pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("3") ? pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("3") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("3") ? pionTransport : null} alt=""/>
                </div>
                <div className="plateau-item">
                    <img src={props.eolien.includes("2") ?  pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("2") ?  pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("2") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("2") ? pionTransport : null} alt=""/>
                </div>
                <div className="plateau-item">
                    <img src={props.eolien.includes("1") ? pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("1") ? pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("1") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("1") ? pionTransport : null} alt=""/>
                </div>
                <div className="island plateau-item"></div>
                <div
                    style={props.reglemente.includes(8) ? { backgroundColor: "#ff6f72"} : null }
                    className="plateau-item">
                    <img src={props.eolien.includes("8") ?  pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("8") ?  pionPeche : null} alt=""/>
                    <img src={props.loisir.includes("8") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("8") ? pionTransport : null} alt=""/>
                </div>
                <div
                    style={props.interdit.includes(7) ? { backgroundColor: "#c0392b"} : null }
                    className="plateau-item">
                    <img src={props.eolien.includes("7") ?  pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("7") ?  pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("7") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("7") ? pionTransport : null} alt=""/>
                </div>
                <div className="plateau-item">
                    <img src={props.eolien.includes("6") ?  pionEolien : null} alt=""/>
                    <img src={props.peche.includes("6") ?  pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("6") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("6") ? pionTransport : null} alt=""/>
                </div>
                <div className="plateau-item">
                    <img src={props.eolien.includes("5") ?  pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("5") ? pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("5") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("5") ? pionTransport : null} alt=""/>
                </div>
                <div className="plateau-item">
                    <img src={props.eolien.includes("4") ?  pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("4") ?  pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("4") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("4") ? pionTransport : null} alt=""/>
                </div>
                <div className="island plateau-item"></div>
                <div
                    style={props.reglemente.includes(13) ? { backgroundColor: "#ff6f72"} : null }
                    className="plateau-item">
                    <img src={props.eolien.includes("13") ? pionEolien : null} alt=""/>
                    <img src={props.peche.includes("13") ?  pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("13") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("13") ? pionTransport : null} alt=""/>
                </div>
                <div
                    style={props.interdit.includes(12) ? { backgroundColor: "#c0392b"} : null }
                    className="plateau-item">
                    <img src={props.eolien.includes("12") ?  pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("12") ?  pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("12") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("12") ? pionTransport : null} alt=""/>
                </div>
                <div
                    style={props.reglemente.includes(11) ? { backgroundColor: "#ff6f72"} : null }
                    className="plateau-item">
                    <img src={props.eolien.includes("11") ?  pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("11") ?  pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("11") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("11") ? pionTransport : null} alt=""/>
                </div>
                <div className="plateau-item">
                    <img src={props.eolien.includes("10") ?  pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("10") ? pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("10") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("10") ? pionTransport : null} alt=""/>
                </div>
                <div className="plateau-item">
                    <img src={props.eolien.includes("9") ?  pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("9") ?  pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("9") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("9") ? pionTransport : null} alt=""/>
                </div>
                <div
                    style={props.reglemente.includes(19) ? { backgroundColor: "#ff6f72"} : null }
                    className="plateau-item">
                    <img src={props.eolien.includes("19") ?  pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("19") ?  pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("19") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("19") ? pionTransport : null} alt=""/>
                </div>
                <div
                    style={props.reglemente.includes(18) ? { backgroundColor: "#ff6f72"} : null }
                    className="plateau-item">
                    <img src={props.eolien.includes("18") ?  pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("18") ?  pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("18") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("18") ? pionTransport : null} alt=""/>
                </div>
                <div className="plateau-item">
                    <img src={props.eolien.includes("17") ?  pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("17") ?  pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("17") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("17") ? pionTransport : null} alt=""/>
                </div>
                <div
                    style={props.interdit.includes(16) ? { backgroundColor: "#c0392b"} : null }
                    className="plateau-item">
                    <img src={props.eolien.includes("16") ? pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("16") ? pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("16") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("16") ? pionTransport : null} alt=""/>
                </div>
                <div className="plateau-item">
                    <img src={props.eolien.includes("15") ?  pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("15") ?  pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("15") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("15") ? pionTransport : null} alt=""/>
                </div>
                <div className="plateau-item">
                    <img src={props.eolien.includes("14") ?  pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("14") ?  pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("14") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("14") ? pionTransport : null} alt=""/>
                </div>
                <div
                    style={props.reglemente.includes(23) ? { backgroundColor: "#ff6f72"} : null }
                    className="plateau-item">
                    <img src={props.eolien.includes("23") ?  pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("23") ?  pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("23") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("23") ? pionTransport : null} alt=""/>
                </div>
                <div
                    style={props.reglemente.includes(22) ? { backgroundColor: "#ff6f72"} : null }
                    className="plateau-item">
                    <img src={props.eolien.includes("22") ?  pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("22") ?  pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("22") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("22") ? pionTransport : null} alt=""/>
                </div>
                <div
                    style={props.reglemente.includes(21) ? { backgroundColor: "#ff6f72" } : null }
                    className="plateau-item">
                    <img src={props.eolien.includes("21") ?  pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("21") ?  pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("21") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("21") ? pionTransport : null} alt=""/>
                </div>
                <div className="island plateau-item"></div>
                <div className="island plateau-item"></div>
                <div className="plateau-item">
                    <img src={props.eolien.includes("20") ?  pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("20") ?  pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("20") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("20") ? pionTransport : null} alt=""/>
                </div>
                <div className="plateau-item">
                    <img src={props.eolien.includes("29") ?  pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("29") ?  pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("29") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("29") ? pionTransport : null} alt=""/>
                </div>
                <div className="plateau-item">
                    <img src={props.eolien.includes("28") ?  pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("28") ?  pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("28") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("28") ? pionTransport : null} alt=""/>
                </div>
                <div className="plateau-item">
                    <img src={props.eolien.includes("27") ?  pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("27") ?  pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("27") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("27") ? pionTransport : null} alt=""/>
                </div>
                <div
                    style={props.reglemente.includes(26) ? { backgroundColor: "#ff6f72" } : null }
                    className="plateau-item">
                    <img src={props.eolien.includes("26") ?  pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("26") ?  pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("26") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("26") ? pionTransport : null} alt=""/>
                </div>
                <div class="plateau-item five">
                    <img src={props.eolien.includes("25") ?  pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("25") ?  pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("25") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("25") ? pionTransport : null} alt=""/>
                </div>
                <div class="plateau-item six">
                    <img src={props.eolien.includes("24") ?  pionEolien  : null} alt=""/>
                    <img src={props.peche.includes("24") ?  pionPeche  : null} alt=""/>
                    <img src={props.loisir.includes("24") ? pionLoisir : null} alt=""/>
                    <img src={props.transport.includes("24") ? pionTransport : null} alt=""/>
                </div>
            </div>

      </div>
    )
}

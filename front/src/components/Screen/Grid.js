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
    
    return (
        <div className="plateau">
            <img className="cotes" src={cotes} alt=""/>
            <div className="plateau-grid">
                <div className="island plateau-item"></div>
                <div className="island plateau-item"></div>
                <div className="island plateau-item"></div>
                <div className="plateau-item">

                </div>
                <div className="plateau-item five"></div>
                <div className="plateau-item six"></div>
                <div className="plateau-item one"></div>
                <div className="plateau-item two"></div>
                <div className="plateau-item three"></div>
                <div className="plateau-item four"></div>
                <div className="plateau-item five"></div>
                <div class="plateau-item six"></div>
                <div class="plateau-item one"></div>
                <div class="plateau-item two"></div>
                <div class="plateau-item three"></div>
                <div class="plateau-item four"></div>
                <div class="plateau-item five"></div>
                <div class="plateau-item six"></div>
                <div class="plateau-item one"></div>
                <div class="plateau-item two"></div>
                <div class="plateau-item three"></div>
                <div class="plateau-item four"></div>
                <div class="plateau-item five"></div>
                <div class="plateau-item six"></div>
                <div class="plateau-item one"></div>
                <div class="plateau-item two"></div>
                <div class="plateau-item three"></div>
                <div class="plateau-item four"></div>
                <div class="plateau-item five"></div>
                <div class="plateau-item six"></div>
                <div class="plateau-item one"></div>
                <div class="plateau-item two"></div>
                <div class="plateau-item three"></div>
                <div class="plateau-item four"></div>
                <div class="plateau-item five"></div>
                <div class="plateau-item six"></div>
            </div>

      </div>
    )
}

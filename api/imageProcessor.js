const fs = require('fs');
const plateauInfo = require('../staticData/plateauInfo.json')
const aleaInfo = require('../staticData/alea.json')

let plateauReel = require('../staticData/plateauReel.json')
let lastData = require('./lastData.json')

let infoMj = {
    timeLeft: 390,
    phase: 1
}

let time = {
    timeLeft: 390,
    phase: 1,
    isPaused: true,
}

let alea = {
    "id": 0,
    "peche": 1,
    "transport": 1,
    "loisir": 1,
    "eolien": 1
}

let aleaSwitcher = 0;
let interditSwitcher = 0;
let reglementeSwitcher = 0;
let pasDeTempsSwitcher = 0;

let chosen = []
let none = []

let answer = {
    vp: 0,
    ve: 0,
    vl: 0,
    vt: 0,
    vg: 0,
    vs: 0,
    er: 0,
};

function howMany(data) {
    let nb = 0;
    for (x in data) {
        if (data[x] == true) {
            nb++;
        }
    }
    return (nb);
};

module.exports = app => {
        app.post('/api/get-image', (req, res) => {
            plateauReel = req.body
            res.end()
        })

        app.get('/api/send-image', (req, res) => {
            res.json(plateauReel)
        })

        app.post('/api/time', (req, res) => {
            time = req.body
            res.end()
        })

        app.get('/api/time', (req, res) => {
            res.json(time)
        })

        app.post('/api/amp', (req, res) => {
            interditSwitcher = 1;
            reglementeSwitcher = 1;
            res.end()
        })

        app.get('/api/amp-interdit', (req, res) => {
            let zoneInterdit = [7, 12, 16]
            if (interditSwitcher == 1) {
                for (let i = 0; i < 2; i++) {
                    let index = Math.floor(Math.random() * zoneInterdit.length)
                    none.push(zoneInterdit[index])
                    zoneInterdit.splice(index, 1)
                }
                interditSwitcher = 0;
            }
            res.json(none)
        })

        app.get('/api/amp-reglemente', (req, res) => {
            let zoneReglemente = [19, 18, 8, 13, 26, 21, 23, 22, 3, 11]
            if (reglementeSwitcher == 1) {
                for (let i = 0; i < 4; i++) {
                    let index = Math.floor(Math.random() * zoneReglemente.length)
                    chosen.push(zoneReglemente[index])
                    zoneReglemente.splice(index, 1)
                }
                reglementeSwitcher = 0;
            }
            res.json(chosen)
        })

        app.post ('/api/alea', (req, res) => {
            aleaSwitcher = 1;
            res.end()
        })

        app.get('/api/alea', (req, res) => {
            let aleaId = 0;
            if (aleaSwitcher == 1) {
                aleaId = Math.round(Math.random() * 36)
                aleaSwitcher = 0;
            }
            res.json(aleaId)
        })

        app.get('/api/calcul', (req, res) => {
            answer = {
                vp: 0,
                ve: 0,
                vl: 0,
                vt: 0,
                vg: 0,
                vs: 0,
                er: 0,
            };

            for (let i = 1; i < 30; i++) {

                let amp = 1
                let n = howMany(plateauReel[i]);
                let cc = Math.pow(0.9, (n - 1));

                if (chosen.includes(i)) {
                    amp = 0.5
                }
                if (none.includes(i)) {
                    amp = 0
                }

                let aleaPeche = 1
                let aleaLoisir = 1
                let aleaTransport = 1
                let aleaEolien = 1

                if (i == alea.id) {
                    if (alea.peche) {
                        aleaPeche = 0
                    }
                    if (alea.loisir) {
                        aleaLoisir = 0;
                    }
                    if (alea.transport) {
                        aleaTransport = 0;
                    }
                    if (alea.eolien) {
                        aleaEolien = 0;
                    }
                }

                let vp = plateauInfo[i].pp * plateauReel[i].peche * cc * aleaPeche * amp;
                let ve = plateauInfo[i].pe * plateauReel[i].eolien * cc * aleaLoisir * amp;
                let vl = plateauInfo[i].pl * plateauReel[i].loisir * cc * aleaTransport * amp;
                let vt = plateauInfo[i].pt * plateauReel[i].transport * cc * aleaEolien * amp;
                let vg = vp + ve + vl + vt;

                answer.vp += vp * 4;
                answer.ve += ve * 4;
                answer.vl += vl * 4;
                answer.vt += vt * 4;
                answer.vg += vg;

                var gp = 3 * vp;
                var ge = 2 * ve;
                var gl = 3 * vl;
                var gt = 1 * vt;

                answer.vs += (gp + ge + gl + gt) / 2;

                var ce = Math.pow(0.9, n * amp);
                answer.er += plateauInfo[i].e * ce;
            }
        res.json(answer);
    })

    app.post('/api/pas-de-temps', (req, res) => {
        pasDeTempsSwitcher = 1;
        res.end()
    })

    app.get('/api/pas-de-temps', (req, res) => {
        if (pasDeTempsSwitcher == 1) {
            let today = Date.now();
            let year = new Date().getFullYear();
            let pasDeTemps = {
                "0": {
                    year: year,
                    vg: answer.vg,
                    vs: answer.vs,
                    er: answer.er
                },
                "1": {
                    year: year + 2,
                    vg: answer.vg,
                    vs: answer.vs,
                    er: answer.er
                },
                "2": {
                    year: year + 4,
                    vg: answer.vg,
                    vs: answer.vs,
                    er: answer.er
                },
                "3": {
                    year: year + 6,
                    vg: answer.vg,
                    vs: answer.vs,
                    er: answer.er
                },
                "4": {
                    year: year + 8,
                    vg: answer.vg,
                    vs: answer.vs,
                    er: answer.er
                }
            }

                let vg = 10;
                let vs = 10;
                let er = 10;

                for (let i = 1; i < 16; i++) {
                    let caseImpacte = Math.round(Math.random() * 28)
                    pasDeTemps[i].vg = vg - (plateauReel[caseImpacte].peche + plateauReel[caseImpacte].eolien + plateauReel[caseImpacte].loisir + plateauReel[caseImpacte].transport)
                    pasDeTemps[i].vs = vs - (plateauReel[caseImpacte].peche + plateauReel[caseImpacte].eolien + plateauReel[caseImpacte].loisir + plateauReel[caseImpacte].transport)
                    er -= Math.random() * 2
                    pasDeTemps[i].er = er;
                }
            res.json(pasDeTemps)
        }
        res.json(answer)
    })
}

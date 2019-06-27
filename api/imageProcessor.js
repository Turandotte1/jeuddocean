const fs = require('fs');
const plateauInfo = require('../staticData/plateauInfo.json')

let plateauReel = require('../staticData/plateauReel.json')

let infoMj = {
    timeLeft: 390,
    phase: 1
}

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

	app.get('/api/calcul', (req, res) => {
        let answer = {
            vp: 0,
            ve: 0,
            vl: 0,
            vt: 0,
            vg: 0,
            vs: 0,
            er: 0,
        };

        for (let i = 1; i < 30; i++) {

            let n = howMany(plateauReel[i]);

            let cc = Math.pow(0.7, (n - 1));

            let vp = plateauInfo[i].pp * plateauReel[i].peche * cc * plateauInfo[i].amp;
            let ve = plateauInfo[i].pe * plateauReel[i].eolien * cc * plateauInfo[i].amp;
            let vl = plateauInfo[i].pl * plateauReel[i].loisir * cc * plateauInfo[i].amp;
            let vt = plateauInfo[i].pt * plateauReel[i].transport * cc * plateauInfo[i].amp;
            let vg = vp + ve + vl + vt;

            answer.vp += vp;
            answer.ve += ve;
            answer.vl += vl;
            answer.vt += vt;
            answer.vg += vg;

            var gp = 3 * vp;
            var ge = 2 * ve;
            var gl = 3 * vl;
            var gt = 1 * vt;

            answer.vs += (gp + ge + gl + gt) / 2;

            var ce = Math.pow(0.6, n * plateauInfo[i].amp);
            answer.er += plateauInfo[i].e * ce;
        }

        fs.writeFile('./api/lastData.json', JSON.stringify(answer), 'utf8', function readFileCallback(err, data) {
            if (err){
                console.log(err);
            } else {
                console.log("json ok")
            }
        });
        res.json(answer);
    })

    app.get('/api/pas-de-temps', (req, res) => {
        let today = Date.now();
        let year = new Date().getFullYear();

        let pasDeTemps = {
            "1": {
                year: year + 2
            },
            "2": {
                year: year + 4
            },
            "3": {
                year: year + 6
            },
            "4": {
                year: year + 8
            },
            "5": {
                year: year + 10
            },
            "6": {
                year: year + 12
            },
            "7": {
                year: year + 14
            },
            "8": {
                year: year + 16
            },
            "9": {
                year: year + 18
            },
            "10": {
                year: year + 20
            },
            "11": {
                year: year + 22
            },
            "12": {
                year: year + 24
            },
            "13": {
                year: year + 26
            },
            "14": {
                year: year + 28
            },
            "15": {
                year: year + 30
            }
        }
        res.json(pasDeTemps)
    })
};

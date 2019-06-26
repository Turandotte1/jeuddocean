const plateauInfo = require('./plateauInfo.json')

let plateauReel = require('./plateauReel.json')

let infoMj = {
    timeLeft: 390,
    phase: 1
}

function howMany(data) {
    var nb = 0;
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
        var answer = {
            vp: 0,
            ve: 0,
            vl: 0,
            vt: 0,
            vg: 0,
            vs: 0,
            er: 0,
        };

        for (var i = 1; i < 30; i++) {

            var n = howMany(plateauReel[i]);

            var cc = Math.pow(0.7, (n - 1));

            var vp = plateauInfo[i].pp * plateauReel[i].peche * cc * plateauInfo[i].amp;
            var ve = plateauInfo[i].pe * plateauReel[i].eolien * cc * plateauInfo[i].amp;
            var vl = plateauInfo[i].pl * plateauReel[i].loisir * cc * plateauInfo[i].amp;
            var vt = plateauInfo[i].pt * plateauReel[i].transport * cc * plateauInfo[i].amp;
            var vg = vp + ve + vl + vt;

            console.log(vp);

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
        res.json(answer);
    });
};

const mongoose = require('mongoose');
const data = require('../data/case.json');
const caseData = require(`../data/cases/${data.id}.json`);
const Case = mongoose.model('cases');

function howMany(data) {
    nb = -1;
    for (x in data) {
        if (data[x] == true) {
            nb++;
        }
    }
    return (nb);
};

module.exports = app => {
	app.get('/', (req, res) => {
        var query = { id: data.id };
        var newQuery = {
            peche: data.peche,
            eolien: data.eolien,
            loisir: data.loisir,
            transport: data.transport
        };

        Case.findOneAndUpdate(query, newQuery, function(err, res) {
            console.log("Nouvelle valeur peche est " + res.peche);
            console.log("Nouvelle valeur eolien est " + res.eolien);
            console.log("Nouvelle valeur loisir est " + res.loisir);
            console.log("Nouvelle valeur transport est " + res.transport);
        });

        var n = howMany(data);
        var cc = Math.pow(0.7, n);

        var answer = {
            vp: 0,
            ve: 0,
            vl: 0,
            vt: 0,
            vg: 0,
            vs: 0,
            er: 0,
        };

        answer.vp = caseData.pp * data.peche * cc * caseData.amp;
        answer.ve = caseData.pe * data.eolien * cc * caseData.amp;
        answer.vl = caseData.pl * data.loisir * cc * caseData.amp;
        answer.vt = caseData.pt * data.transport * cc * caseData.amp;
        answer.vg = answer.vp + answer.ve  + answer.vl + answer.vt;

        var gp = 3 * answer.vp;
        var ge = 2 * answer.ve;
        var gl = 3 * answer.vl;
        var gt = 1 * answer.vt;

        answer.vs = parseFloat((gp + ge + gl + gt) / 2).toPrecision(2);

        var ce = Math.pow(0.6, n * caseData.amp);
        console.log(ce);
        answer.er = caseData.e * ce;

        res.send(answer);
    });
};

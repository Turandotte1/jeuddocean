let plateauReel = require('./plateauReel.json')

module.exports = app => {

    app.post('/api/get-image', (req, res) => {
        plateauReel = req.body
        res.end()
    })

    app.post('/api/time', (req, res) => {
        infoMj = req.body
        res.end()
    })

    app.get('/screen/time', (req, res) => {
        res.json(infoMj)
    })

    app.post('/api/time', (req, res) => {
        infoMj = req.body
        res.end()
    })
    app.get('/screen/time', (req, res) => {
        res.json(infoMj)
    })

};

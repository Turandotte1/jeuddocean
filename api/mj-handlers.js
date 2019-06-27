var video = 0

module.exports = app => {

    app.post('/api/start-video', (req, res) => {
        video = res.data
        console.log("did we receive" + video)
        res.end()
    })

    app.get('/api/send-video', (req, res) => {
        res.json(video)
    })

}

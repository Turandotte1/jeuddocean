module.exports = app => {
	app.get('/api/get-image', (req, res) => {
        res.send(res.body);
    });
};

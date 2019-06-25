const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
var diff = require('deep-diff').diff;

//const keys = require('./config/keys');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

require('./api/imageReader.js')(app);
require('./api/calculate.js')(app);

const port = 3005 || process.env.PORT;

app.listen(port, (err) => {
    if (err) {
        return console.log('Something very bad happened :( ', err);
    }
    console.log(`magic happens on ${port}`);
});

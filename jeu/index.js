const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//const reader = require('./middleware/reader');
//const updateCase = require('./middleware/updateCase');

const keys = require('./config/keys');

require('./models/Case');

try {
    mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
    console.log('Connected to database: \x1b[32m[OK]\x1b[0m');
}
catch (error) {
    console.error(error);
};

const app = express();
app.use(bodyParser.json());

require('./api/calculate.js')(app);

const port = 3000 || process.env.PORT;

app.listen(port, (err) => {
    if (err) {
        return console.log('Something very bad happened :( ', err);
    }
    console.log(`magic happens on ${port}`);
});

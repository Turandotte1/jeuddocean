const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

require('./api/mj-handlers.js')(app);
require('./api/imageProcessor.js')(app);

const port = 3005 || process.env.PORT;

console.log("back about to listen");
app.listen(port, (err) => {
    if (err) {
        return console.log('Something very bad happened :( ', err);
    }
    console.log(`magic happens on ${port}`);
});

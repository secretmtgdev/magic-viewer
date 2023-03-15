const PORT = 8081;

var express = require('express');
var fs = require('fs');
var cors = require('cors');

var app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

var server = app.listen(PORT, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`App is listening at http://${host}:${port}`);
})

// Gets the contents of a deck list
app.get('/deckList/:deckName', (req, res) => {
    var name = req.params.deckName;
    fs.readFile(`${__dirname}/decks/${name}.json`, (err, data) => {
        if (err) {
            return console.error(err);
        }

        var deckList = JSON.parse(data);
        res.json(JSON.stringify(deckList));
    });
});
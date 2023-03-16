const PORT = 8081;

const express = require('express');
const fs = require('fs');
const cors = require('cors');
const mongoose = require('mongoose');

var app = express();
app.use(cors());

function createDeckCollection() {
    const cardSchema = new mongoose.Schema(
        {
            name: String
        }
    );

    const sectionSchema = new mongoose.Schema(
        {
            name: String,
            cardList: [cardSchema]
        }    
    );

    const deckSchema = new mongoose.Schema(
        {
            name: String,
            commander: String,
            sections: [sectionSchema]
        }
    );

    const deckModel = mongoose.model('Deck', deckSchema);
    deckModel.createCollection()
    .then(collection => {
        console.log('Deck collection has been created');
    });
}

function connectToDatabase(data) {
    const config = JSON.parse(data);
    const uri = config.connectionString.replace('<password>', config.password);
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

    mongoose.connect(uri, connectionParams)
    .then(() => {
        console.log('Connected to the database');
        createDeckCollection();
    })
    .catch(err => {
        console.error(`Error connection to the database. \n${err}`);
    });
}

// Connect to mongoDB
fs.readFile(`${__dirname}/configs/server.json`, async (err, data) => {
    if (err) throw err;

    connectToDatabase(data);
});

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
        if (err) throw err;

        var deckList = JSON.parse(data);
        res.json(JSON.stringify(deckList));
    });
});
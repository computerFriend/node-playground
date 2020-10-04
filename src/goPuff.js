const axios = require("axios");
const express = require("express");

// QUESTION: Are you wanting all of the code in this one file? I'm assuming 'yes', for the sake of the exercise.. but I'm thinking IRL it might better to split this up into at least 2 or 3 files.

const createService = () => {
    const app = express();
    const dictionaryURL = "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt";

    // initializing with 'var' so that allWords can be accessed across the fxn
    var allWords;

    // grabbing all words each time for now.. in future, would be better to cache the words & refresh periodically (based on how often the wordList is updated)
    axios.get(dictionaryURL).then(response => {
        console.log('fetching allWords...');
        // assuming response.data comes in as a string, with each word delimited by \'n'
        // convert allWords into an array for easier handling
        allWords = response.split('\n');
        // check that allWords is an array and of the correct length
        console.log('allWords is an Array: ', Array.isArray(allWords));
        console.log('allWords.length: ', allWords.length);

    }).catch(errResponse => {
        console.error('Unable to fetch words from dictionaryURL ' + dictionaryURL + ':\n', errResponse);
    })

    app.get('/', function (req, res) {

        console.log('GET was hit');

        // grab stem from query
        let stem = req.query.stem;

        // filter words based on dictionary.. if the dictionary never changes, would be better to cache the dictionary
        // TODO: cache dictionary, update it on a timer (making assumptions about dictionary updates)

        // STUB
        // const allWords = ['apple', 'apples', 'applesauce', 'bees', 'crackers'];

        // request validation
        if (stem === '') res.send(allWords); // send back all words if stem is an empty string
        if (!stem) res.status(400).send('No query specified'); // reject if stem DNE


        const filteredStems = allWords.filter(word => word.startsWith(stem)); // brute force... O(N) complexity
        if (filteredStems.length > 0) {
            res.send({ data: filteredStems });
        } else {
            res.status(404).end();
        }

    })

    return app;
};

module.exports = { createService }; 
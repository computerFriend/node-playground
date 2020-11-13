const axios = require("axios");
const express = require("express");

// QUESTION: Are you wanting all of the code in this one file? I'm assuming 'yes', for the sake of the exercise.. but I'm thinking IRL it might better to split this up into at least 2 or 3 files.

// if I were allowed to edit the app.js file I'd put an init function in there that fetches the wordList and caches it. Could reduce latency, esp if the wordList is large and/or network is slow.

const createService = () => {
    const app = express();
    const dictionaryURL = "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt";

    app.get('/', function (req, res) {
        let allWords;

        // grabbing all words each time for now.. in future, would be better to cache the words & refresh periodically (based on how often the wordList is updated)
        console.log('fetching allWords...');
        axios.get(dictionaryURL).then(response => {

            // assuming response.data comes in as a string, with each word delimited by \'n'
            // convert allWords into an array for easier handling
            allWords = response.data.split('\r\n');
            return allWords;

        }).catch(errResponse => {
            console.error('Unable to fetch words from dictionaryURL ' + dictionaryURL + ':\n', errResponse);
        }).then(allWords => {
            
            // grab stem from query
            let stem = req.query.stem;

            // filter words based on dictionary.. if the dictionary never changes, would be better to cache the dictionary

            // request validation
            if (stem === '') res.send(allWords); // send back all words if stem is an empty string
            if (!stem) res.status(400).send('No query specified'); // reject if stem DNE

            // brute force approach with O(N) time complexity... not great, will see if I can come up with something more clever & efficient...
            const filteredStems = allWords.filter(word => word.startsWith(stem));
            if (filteredStems.length > 0) {
                console.log('Returning filteredStems:\n', filteredStems);
                res.send({ data: filteredStems });
            } else {
                res.status(404).end();
            }

        })

    })


    return app;
};

module.exports = { createService }; 
const express = require('express');
const app = express();
const PORT = 3000;
const URL = "https://emoji-api.com/emojis?access_key=ba356c9ebc4df5fd1840492fbff240b10583cd26";

let emojies = []

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log("application is listening to port " + PORT);
});

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/emojies', (req, res, next) => {
    fetch(URL)
    .then(response => response.json())
    .then(commits => emojies = commits).then(() => {
        res.send(emojies);
    })
});

app.get('/emojies/:id', (req, res, next) => {
    const id = req.params.id;
    fetch(URL)
    .then(response => response.json())
    .then(commits => emojies = commits).then(() => {
        if (emojies[id] === -1) {
            res.send("Emoji not found");
        } else {
            res.send(emojies[id]);
        }
    });
});

app.get('/emojies/emoji/random', (req, res, next) => {
    fetch(URL)
    .then(response => response.json())
    .then(commits => emojies = commits).then(() => {
        let randomNumber = Math.floor(Math.random() * emojies.length);
        res.send(emojies[randomNumber]);
    });
});

app.get('/emojies/emoji/:name', (req, res, next) => {
    const name = req.params.name;
    fetch(URL)
    .then(response => response.json())
    .then(commits => emojies = commits).then(() => {
        for (let i = 0; i < emojies.length; i++) {
            if (emojies[i]["slug"] === name) {
                res.send(emojies[i]);
            }
        }
    });
});
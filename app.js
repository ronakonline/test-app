var express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello!!!!');
})

app.listen('400', () => {
    console.log('app running!');
});
// console.log('Chai aur Code');
require('dotenv').config();

const express = require('express'); // require module syntax - commonJS
//import express from "express" -module JS syntax
const app = express(); //app is variable or not
const port = 4000;

app.get('/', (req, res) => { // '/' is home route or not
    res.send('Hello World!');
});

app.get('/login', (req, res) => {
    res.send('<h1> please login at chai aur code <h1>');
});

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur Code</h2>');
});

app.listen(process.env.PORT, () => {
    console.log(`App Listening on port ${port}`);
});
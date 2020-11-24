const app = require('./www/www.js');
const express = require('express');

app.use(express.static(__dirname + '/public'));

app.listen(3000, ()=>{
    console.log('server on port 3000');
});
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const app = express();


var cache = 0;
var movieDate;
// When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter

//http://www.omdbapi.com/?apikey=[8730e0e]&

app.use(morgan('dev'));

app.get('/', function (req, res) {

  if (cache === 1) {
    console.log('returning cache')
    res.status(200).json(movieData);
  } 
  if (cache < 1) {
    console.log(req.query.i);
    axios.get('http://www.omdbapi.com/?i=' + req.query.i + '&apikey=8730e0e')
      .then(response => {
        movieData = response.data;
        res.status(200).json(response.data);
      })
      .catch(error => {
        console.log(error);
      })
    }
    cache += 1
});





module.exports = app;
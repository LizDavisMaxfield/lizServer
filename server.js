var express = require('express');
var bodyParser = require('body-parser');
var request = require("request");

var app = express();

app.use(bodyParser.json());

app.get("/bechdel/:title", function(req, res){
  request.get("http://www.omdbapi.com/?type=movie&s="+req.params.title, function(error, response, body){
    if(error) res.status(500).json(err);
    request.get("http://bechdeltest.com/api/v1/getMoviesByImdbId?imdbid="+body.imdbID, function(err, res, bod){
      
    })
  })
});

app.listen(8888, function(){
  console.log("Listening on 8888")
});

var path = require('path');
var express = require('express');

const https = require('https');
const fs = require('fs');

const app = express();

//These allow for a https: url for connecting to APIs
var options = {
    key: fs.readFileSync( './ssl/key.pem' ),
    cert: fs.readFileSync( './ssl/cert.pem' ),
};

//This sets what localhost port the server will run on
var port = 3333

//This allowes me to create a server that has ssl
var server = https.createServer(options, app).listen(port, function(){
  console.log("Express server listening on port " + port);
});

//This serves up the correct files for loading
app.use(express.static(__dirname + '/client'));
app.get('*', (req,res) => res.sendFile(path.join(__dirname+'/client/index.html')))

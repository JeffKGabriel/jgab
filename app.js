//--- REQUIRES -------------------------------------------------------------------

var path = require('path');
var appDir = path.dirname(require.main.filename);
var express = require('express');
var app = express();
var port = 443;
var bodyParser = require('body-parser');
var request = require('request');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');

//ssl
var http = require('http');
var https = require('https');
var fs = require('fs');
var options = {
     key: fs.readFileSync('/etc/letsencrypt/live/www.jgab.me/privkey.pem'),
     cert: fs.readFileSync('/etc/letsencrypt/live/www.jgab.me/fullchain.pem'),
     ca: fs.readFileSync('/etc/letsencrypt/live/www.jgab.me/chain.pem')
}

var server = https.createServer(options, app);//.listen(443);




// this http redirect works
var redirectApp = express () ,
redirectServer = http.createServer(redirectApp);

redirectApp.use(function requireHTTPS(req, res, next) {
  if (!req.secure) {
    //console.log(req);
    //console.log("code = " + req.query.code);
    //return res.redirect('https://' + req.headers.host + req.url);
    res.redirect('https://jgab.me'+ req.url);
  }
  next();
})

redirectServer.listen(80);







app.use(bodyParser.json() );                          // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));    // to support URL-encoded bodies


//app.use('/', express.static(__dirname));  // set root folder\

app.use(cookieParser());




var router = express.Router();



app.get('/8-24', function (req, res , next ) {
  //res.cookie( "test3" , "lmaoboth");
  console.log("get /8-24");

  res.sendFile('index.html', {"root": appDir+"/projects/8-24"} );
  

});






app.get('/', function (req, res , next ) {
  //res.cookie( "test3" , "lmaoboth");
  console.log("get /");

  res.sendFile('index.html', {"root": appDir} );

});



app.use('/', express.static(__dirname));  // set root folder\

app.use('/', router);



/*
app.listen(port, function () {
//app.listen([80], [443, 5001],function(){
//app.listen(443, function(){
  console.log('Example app listening on port '+ port);
});
*/

server.listen(port, function () {
//app.listen([80], [443, 5001],function(){
//app.listen(443, function(){
  console.log('Example app listening on port '+ port);
});

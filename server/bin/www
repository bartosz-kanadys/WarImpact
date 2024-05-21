#!/usr/bin/env node

var app = require('../app');
var debug = require('debug')('server:server');
var http = require('http');
var dotenv = require('dotenv')
dotenv.config()

var port = process.env.PORT

var server = http.createServer(app);

server.listen(port);

function onListening() {
  console.log('Listening on http://localhost:' + port);
}

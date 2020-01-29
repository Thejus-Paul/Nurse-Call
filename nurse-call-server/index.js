var server = require('express')();
var client = require('express')();
var http_server = require('http').createServer(server);
var http_client = require('http').createServer(client);
var io_server = require('socket.io')(http_client);
var io_client = require('socket.io')(http_server);

server.get('/', function(req, res){
  res.sendFile(__dirname + '/server.html');
});

client.get('/', function(req, res){
  res.sendFile(__dirname + '/client.html');
});

io_server.on('connection', function(socket){
  console.log('a user connected to server');
  socket.on('chat message', function(msg){
    io_server.emit('chat message', msg);
  });
});

io_client.on('connection', function(socket){
  console.log('a user connected to client');
  socket.on('chat message', function(msg){
    io_client.emit('chat message', msg);
  });
});

http_server.listen(3000, function(){
  console.log('listening on *:3000');
});
http_client.listen(3002, function(){
  console.log('listening on *:3002');
});
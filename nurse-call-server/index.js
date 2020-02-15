  var server = require('express')();
var client = require('express')();
var http_server = require('http').createServer(server);
var http_client = require('http').createServer(client);
var io_server = require('socket.io')(http_client);
var io_client = require('socket.io')(http_server);
const {app, BrowserWindow} = require('electron')
const url = require('url')
server.get('/', function(req, res){
  res.sendFile(__dirname + '/server.html');
});

client.get('/:name', function(req, res){
  res.sendFile(__dirname + '/client.html'); 
});


io_client.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io_client.emit('chat message', msg);
    console.log(msg)
  });
});

http_server.listen(3000, function(){
  console.log('listening on *:3000');
});
http_client.listen(3002, function(){
  console.log('listening on *:3002');
});

let win

function createWindow() {
  win = new BrowserWindow({width: 1280, height: 800})
  win.loadURL(url.format({
      pathname: 'localhost:3000',
      protocol: 'http:',
      slashes: true
  }))
  win.setMenu(null)
}

app.on('ready', createWindow)
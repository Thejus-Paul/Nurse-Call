const {app, BrowserWindow} = require('electron')
const url = require('url')
const config = require('./config.json')


let win

console.log(config)

function createWindow() {
    win = new BrowserWindow({width: 300, height: 200})
    win.loadURL(url.format({
        pathname: config['station']+'/'+config['name'],
        protocol: 'http:',
        slashes: true
    }))
    win.setMenu(null)
}

app.on('ready', createWindow)
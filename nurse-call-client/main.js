const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let win

function createWindow() {
    win = new BrowserWindow({width: 300, height: 200})
    win.loadURL(url.format({
        pathname: 'localhost:3002',
        protocol: 'http:',
        slashes: true
    }))
    win.setMenu(null)
}

app.on('ready', createWindow)
const path = require('path')
const express = require('express')

const download = require("./routes/downloads")
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use("/download" , download)
module.exports = server

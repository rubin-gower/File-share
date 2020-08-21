const path = require('path')
const express = require('express')
const multer = require('multer')
const cors = require('cors');

const download = require("./routes/downloads")
const files = require("./routes/files")

const server = express()

server.use(cors())
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use("/download" , download)
server.use("/api/files" , files)
module.exports = server

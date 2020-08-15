const connection = require('./connection')

module.exports = {
    saveFile,
    getFile,
    delFile,
}

function saveFile(file, db = connection) {
    // console.log("data base: adding player to game table", player)
    return db('files')
    .insert(file)
}

function getFile(id, db = connection) {
    // console.log("data base: geting id from game")
    //return db('game').where("game_id", id)
}

function delFile(id, db = connection) {
    // console.log("data base: geting id from game")
    //return db('game').where("game_id", id)
}
//am just seting up db functions and route api stuff now. there is no super agent yet.
//working on getfile
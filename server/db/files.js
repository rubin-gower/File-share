const connection = require('./connection')


module.exports = {
    saveFile,
    // getFiles,
    // delFile,
  
}

function saveFile(file, db = connection) {
     console.log("data base: adding file to files table", file)
    return db('files')
    .insert(file)
}


// function getFiles(id, db = connection) {
//     // console.log("data base: geting id from game")
//     //return db('game').where("game_id", id)
//     return db('files')
//     .select().where("id", id)
// }

// function delFile(id, db = connection) {
//     // console.log("data base: geting id from game")
//     //return db('game').where("game_id", id)
// }
//am just seting up db functions and route api stuff now. there is no super agent yet.
//working on getfiles
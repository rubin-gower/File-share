const fs = require('fs');

module.exports = {
    createFolder,
}

function createFolder(name) {
    
if (fs.existsSync(`../../Files`))  console.log("it exists")

if (!fs.existsSync(`../../Files/${name}`)){
    console.log("it dosnt exist yet")
    fs.mkdirSync(`../../Files/${name}`);
}
}
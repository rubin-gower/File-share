const fs = require('fs');

module.exports = {
    createFolder,
    readFolder,
    saveFile,
}

function createFolder(name) {
if (!fs.existsSync(`./Files/${name}`)){
    console.log("it dosnt exist yet")
    fs.mkdirSync(`./Files/${name}`);
}
}

function readFolder(name){
  let files = []
    fs.readdirSync(`./Files/${name}`).forEach(file => {
     
        files.push(file)
      });
    console.log(files)
    return files
}

function saveFile(file){
    console.log(file)
    fs.writeFile('./Files/utpyelalwo', 'abc', (err,data)=>{
        if(err) console.log(err)
        else console.log(data)
        
    })
      
  }
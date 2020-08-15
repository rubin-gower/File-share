const express = require('express')
const router = express.Router()

router.get('/:id/:name', function(req, res){
  console.log("download was hit")
    let location = req.params.id
    let name = req.params.name
    console.log("Quary: ", `_dirname/../storage/${location}/${name}`)
   
    const file = `server/storage/${location}/${name}`;
    res.download(file); // Set disposition and send it.
  });

module.exports = router
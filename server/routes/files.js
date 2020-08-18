const express = require('express')
const router = express.Router()
const db = require("../db/files")
const st = require("../storage/files")


router.put('/', (req, res) => {
    // console.log(`route recived`, req.body)
    console.log("body: ", req.body)
   
    db.saveFile(req.body)
        .then(file => {
            res.send(file)
        })
        .catch(error => {
            console.log(error.message);
            
            res.status(500).send(error.messge)
        })
    st.createFolder(req.body.id)
})

router.get('/:id', (req, res) => {
    // console.log(`route recived`, req.body)
    console.log("body: ", req.props.id)
    db.getFiles(req.props.id)
        .then(file => {
            res.send(file)
        })
        .catch(error => {
            console.log(error.message);
            
            res.status(500).send(error.messge)
        })
})

module.exports = router
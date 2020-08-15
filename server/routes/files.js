router.post('/', (req, res) => {
    // console.log(`route recived`, req.body)
    console.log("body: ", req.body.player)
    db.saveFile(req.body.player)
        .then(file => {
            res.send(file)
        })
        .catch(error => {
            console.log(error.message);
            
            res.status(500).send(error.messge)
        })
})
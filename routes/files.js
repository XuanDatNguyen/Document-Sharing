const router = require('express').Router();

router.post('/', (req, res) => {
    //validate request
    if (!req.file) {
        return res.json({error: 'File is required!'})
    }

    //store file

    //store into db

    //response
})

module.exports = router
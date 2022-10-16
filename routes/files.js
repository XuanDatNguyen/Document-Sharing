const router = require('express').Router();
const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
        cb(null, uniqueName)
    },
});

router.post('/', (req, res) => {
    //validate request
    if (!req.file) {
        return res.json({ error: 'File is required!' })
    }

    //store file

    //store into db

    //response
})

module.exports = router
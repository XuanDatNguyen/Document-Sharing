require('dotenv').config()
const express = require('express');
const app = express();

const fileRouter = require('./routes/files');

const connectDB = require('./config/db');
connectDB();

//Routes
app.use('/api/files/', fileRouter)

const PORT = process.env.PORT || 3456;
app.listen(PORT, () => {
    console.log(`server listening with port: ${PORT}`);
})
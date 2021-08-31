require('dotenv').config();
const express = require('express');
const http = require('http');

const app = express()

app.listen(process.env.PORT, () => {
    console.log(`API running at http://${process.env.HOSTNAME}:${process.env.PORT}`)
})
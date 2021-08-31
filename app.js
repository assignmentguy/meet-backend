require('dotenv').config();
const express = require('express');
const http = require('http');
const employeeRouter = require('./routes/employees-route');

const app = express();

app.use('/employees', employeeRouter);

app.listen(process.env.PORT, () => {
    console.log(`API running at http://${process.env.HOSTNAME}:${process.env.PORT}`);
})

module.exports = app
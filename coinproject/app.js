const express = require('express')
const app = express()
const  http = require('http');



app.get('/date/:date', (req, res) => {
    res.send('date!=' + req.params.date)
})

app.get('/longest', (req, res) => {
    res.send('longest period')
})

app.get('/daterange', (req, res) => {
    res.send('longest period')
})


app.listen(8080);
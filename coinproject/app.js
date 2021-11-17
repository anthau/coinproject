// this library selected, because it saves time  and simplifys when coding  backend.

const express = require('express')
const app = express()
const  car = require('./src/test.js');



app.get('/date/:date', (req, res) => {
    res.send('date!=' + req.params.date)
})

app.get('/longest', (req, res) => {
    car.area();
    new car.area2();
    res.send('longest period='  )
})

app.get('/daterange', (req, res) => {
    res.send('longest period')
})
app.get('/max', (req, res) => {
    res.send('longest period')
})

app.listen(8080);
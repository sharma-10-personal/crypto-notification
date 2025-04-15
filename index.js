const express = require('express')
const mysql = require('mysql2')

const db = require('./db')

const app = new express()

app.use(express.json())

app.post('/notification', (req, res) => {


    console.log(req.body)

    let current_btc = req.body.current_btc
    let market_tradVal = req.body.market_trade_vol
    let intra_day_high = req.body.intra_day_high
    let market_cap = req.body.market_cap

    console.log(current_btc, market_tradVal)

    db.createnotificationData(current_btc,market_tradVal, intra_day_high, market_cap)

    res.send('recived ')

})

app.get('/get-notifications', (req, res) => {

    let result = db.getNotifications()

    res.json(result)
    
})

app.delete('/notification/:id', async (req, res) => {
    const notificationId = req.params.id 

    let result = db.deleteNotification(notificationId)

    res.json(result)

})
app.listen('9000', ()=> {
    console.log('app running successfully in port 9000')
})
const mysql = require('mysql2')

async function createnotificationData(current_btc,market_trad_val, intra_day_high, market_cap) {

    const connection = await mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'Welcome123**',
        database : "my_app_db"
    })

    const  result= await connection.execute(
        'INSERT INTO notifications (current_btc, market_trad_val, intra_day_high, market_cap ) VALUES (?, ?, ?, ?)',
        [current_btc, market_trad_val, intra_day_high, market_cap]
    )

    console.log('data intersted into DB ')
    await connection.end()
}


async function  getNotifications() {

    const connection = await mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'Welcome123**',
        database : "my_app_db"
    })

    const  result= await connection.execute(
        'SELECT * FROM notifications'
    )

    console.log('data listed here ')
    await connection.end()
    
    
}
module.exports = { createnotificationData, getNotifications}


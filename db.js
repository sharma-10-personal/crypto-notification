const mysql = require('mysql2')

async function createnotificationData(current_btc,market_trad_val, intra_day_high, market_cap) {

    try{
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

    } catch(err) {
        console.log('error in creating the table')
    }

}


async function  getNotifications() {

    try{

        const connection = await mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : 'Welcome123**',
            database : "my_app_db"
        })

        const  [rows]= await connection.execute(
            'SELECT * FROM notifications'
        )
        await connection.end()
        
        return rows;
    } catch (err){ 
    console.log(err)
    }
    
}

async function deleteNotification (id) {
    let res

    try{

        const connection = await mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : 'Welcome123**',
            database : "my_app_db"
        })

        const  [result]= await connection.execute(
            'DELETE FROM notifications WHERE id  = ?', [id]
        )
        await connection.end()

        if(result.affectedRows === 0) {
            res = result.status(404).json({message : "user not found"})
        }

        res = ({message : `user with id ${id}  deleted succesfully`})
        return res
    } catch (err){ 
    console.log(err)
    }
    
}
module.exports = { createnotificationData, getNotifications, deleteNotification}


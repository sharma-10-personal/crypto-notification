// This crypto notification has 3 apis

1. Create a notification. Line items may include current price of BTC, market trade volume, intra day high price, market cap 
the parameters needs to be sent in body here is a example curl
curl --location 'localhost:9000/notification' \
--header 'Content-Type: application/json' \
--data '{
    "current_btc": 1,
    "market_trade_vol": 2,
    "intra_day_high" :3,
    "market_cap" : 4

}'


2. List sent notifications (sent, outstanding, failed etc.)
this is a get api where no params or body needs to be passed it will list all notificaitons 


curl --location 'localhost:9000/get-notifications'


3. Delete a notification

This api endpoint deletes the notification entry from DB

 curl --location --request DELETE 'localhost:9000/notification?id=1'


 by default all of these are ran in 9000 port
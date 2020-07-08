const express  = require('express')
const mysql = require('mysql')
const app = express();
const dotenv = require('dotenv')

const cors = require('cors')

require('dotenv').config()


const sqlquery = 'SELECT * FROM transaction'
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password:process.env.PASSWORD,
    database: process.env.DATABASE
})
console.log(process.env);

connection.connect(err =>{
    if(err){
        return err;
    }
})

app.use(cors())

app.get('/transaction', (req,res) => {
    connection.query(sqlquery, (err,results) => {
        if(err){
            return res.send
        } else {
            return res.json({
                data:results
                
            })
        }
    })
});




app.listen(3000, () => {
    console.log('server here');
     
 })
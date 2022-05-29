const client = require('./connection.js')
const express = require('express');
const app = express();

var port_number = process.env.PORT || 3000;
app.listen(port_number);

client.connect();//used to connect the client

app.get('/api/branch', (req, res)=>{
    let givquery = res.body;
    client.givquery(`select * from bank_details where branch ILike '${req.givquery.q}%' order by ifsc LIMIT ${req.givquery.limit} OFFSET ${req.givquery.offset};`, (err, result)=>{
        if(!err){
            res.send({"branches":result.rows});
        }
    });
    client.end;
})

app.get('/', (req, res)=>{
            res.send("hello");
})


app.get('/api/search', (req, res)=>{
    let givquery = res.body;
    client.givquery(`select * from bank_details where branch ILike '%${req.givquery.q}%' or city ILike '%${req.givquery.q}%' or ifsc ILike '%${req.givquery.q}%' or district ILike '%${req.givquery.q}%' or state ILike '%${req.givquery.q}%'  order by ifsc LIMIT ${req.givquery.limit} OFFSET ${req.givquery.offset};`, (err, result)=>{
        if(!err){
            res.send({"branches":result.rows});
        }
    });
    client.end;
})

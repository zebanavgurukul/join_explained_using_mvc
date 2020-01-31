const express = require("express");
const left = express.Router();
const leftDB = require("../model/left_joinDB")

left.post('/inner_post', (req,res) => {
    let post_data = {
        created_on : new Date(),
        total_amount : req.body.total_amount,
        comments : req.body.comments,
        movies_id : req.body.movies_id
    }
    leftDB.post_orders(post_data)
    .then(()=>{
        res.send('insert')
    }).catch((err) => {
        res.send(err)
    })
});

left.get('/left_get/:order_id',(req,res) => {
    let order_id = req.params.order_id
    let data = leftDB.get_left(order_id)
    data.then((data) => {
        res.send(data)
    }).catch((err) => {
        res.send(err)
    })
});

module.exports = left



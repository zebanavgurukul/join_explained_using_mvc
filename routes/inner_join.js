const express = require("express");
const inner = express.Router();
const innerDB   = require("../model/inner_joinDB")

inner.post('/inner_post', (req,res) => {
    let post_data = {
        movies_id : req.body.movies_id,
        movies_name : req.body.movies_name,
        movies_year : req.body.movies_year,
        movies_url : req.body.movies_url
    }
    innerDB.data_post(post_data)
    .then(()=>{
        res.send('insert')
    }).catch((err) => {
        res.send(err)
    })
});

inner.get('/inner_get/:movies_id',(req,res) => {
    let movies_id = req.params.movies_id
    let data = innerDB.get_dat(movies_id)
    data.then((data) => {
        res.send(data)
    }).catch((err) => {
        res.send(err)
    })
});

module.exports = inner

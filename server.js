const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json())

const inner = require('./routes/inner_join')
app.use('/inner',inner)

const left = require('./routes/left_join')
app.use('/left',left)

app.listen(6000, () => {
    console.log("server is listening 6000.........")
});
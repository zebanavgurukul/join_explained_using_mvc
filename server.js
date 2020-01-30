const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json())

const inner = require('./routes/inner_join')
app.use('/inner',inner)

app.listen(6000, () => {
    console.log("server is listening 6000.........")
});

const express = require('express');
const app = express();


app.use(express.json());
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/contant')(app);



app.listen(578);
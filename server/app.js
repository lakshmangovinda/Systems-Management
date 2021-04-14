const express = require('express');
const bodyparser = require('body-parser');
const config = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const mysqlconnection = require('./mysql/mysql')
const router = require('./routes/user.routes')

app.use(bodyparser.json());

app.use('*', config());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*',
    'Access-Control-Allow-Credentials', 'true',
    'Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,UPDATE');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization,append,delete,entries,foreach,get,has,keys,set,values');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
mysqlconnection.connect((err) => {
     if (err) throw err;
     console.log('Mysql Connected!');
   });


app.use('/' , router);
//server port>.........................../................/.................................../............................/
const port = process.env.PORT || 3888;
app.listen(port,() => {console.log('connected'); });
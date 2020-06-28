const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const connection = mysql.createConnection({
host: 'localhost',
port: 8889,
user: 'root',
password: 'your_password',
database: 'your_db'
});

connection.connect(err => {
if(err) return err;

app.use(cors());
});

//route for insert data
app.post('/',(req, res) => {
    let data = {name: req.body.name, email: req.body.email};
    let sql = "INSERT INTO user SET ?";
    let query = connection.query(sql, data,(err, results) => {
      if(err) throw err;
      res.redirect('/');
    });
  });



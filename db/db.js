const mysql = require('mysql');

const conn = mysql.createConnection({
    host:'127.0.0.1',//数据库的地址
    user:'root',//账号
    password:'tdcq1234',
    database:'easyshop'
});

conn.connect();

module.exports = conn;
var mysql = require("mysql")

var pool = mysql.createPool({
    host:'db4free.net',port:3306,
    user:'penturas',password:"Dimasaha5815",
    database:"banktestdb", connectionLimit:100,
    multipleStatements: true
});

module.exports = pool;
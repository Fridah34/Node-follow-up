var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "lstitch",
    database: "mydb"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ('Fridah', 'Kitusuru')";
    con.query(sql, function(err,result){
        if (err) throw err;
        console.log("1 record inserted, ID: " + result.insertId);
    }); 
});
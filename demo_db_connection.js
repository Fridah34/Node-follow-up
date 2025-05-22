var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "lstitch"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) { //The query method takes an sql statements as a parameter and returns the result
    if (err) throw err;
    console.log("Result: " + result);
  });
});
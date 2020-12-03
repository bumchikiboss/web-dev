var mysql = require('mysql');

var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "boSSboSS",
    database : "mydb"
});

let username=sessionStorage.getItem("name");
let finalscore=sessionStorage.getItem("score");

var q="";


q="insert into Quiz_participants values('" + username + "','" + finalscore + "')";

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
    con.query(q, function (err, result) {
      if (err) throw err;
      console.log("values added");
    });
  
  
  });
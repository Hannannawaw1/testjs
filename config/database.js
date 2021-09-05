let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "slamet",
  password: "123",
  database: "db-js",
});

connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connection Succuessfully!");
  }
});

module.exports = connection;

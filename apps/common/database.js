var config = require("config");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host     : config.get("mysql.host"),
    database : config.get("mysql.database"),
    port: config.get("mysql.port")
  });

  connection.connect();

  function getConnection(){
    if(!connection){
        connection.connect();
    }
    return connection;
  }

  module.exports = {
    getConnection: getConnection
  }
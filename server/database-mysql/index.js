const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'firasj20',
  database : 'project'
});
connection.connect(function (err) {
  if (err) {
      return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
})
module.exports = connection;
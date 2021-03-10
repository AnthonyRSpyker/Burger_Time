const mysql = require('mysql');
require('dotenv').config();

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWS_URL);
} else {
const connection = mysql.createConnection({
  host: process.env.host,
  port: 3306,
  user: process.env.user,
  
  password: process.env.password,
  database: process.env.database,
});
};

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
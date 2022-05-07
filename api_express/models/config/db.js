const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createPool({
	connectionLimit : 1000,
    connectTimeout  : 60 * 60 * 1000,
    acquireTimeout  : 60 * 60 * 1000,
    timeout         : 60 * 60 * 1000,
	host			: process.env.DB_HOST || "localhost",
	user			: process.env.DB_USER || "root",
	password		: process.env.DB_PASSWORD || "root",
	database		: process.env.DB_NAME || "TP1_RIA",
	port			: process.env.DB_PORT || "8889",
});

// Attempt to catch disconnects 
connection.on('connection', function (connection) {
	console.log('DB Connection established');
  
	connection.on('error', function (err) {
	  console.error(new Date(), 'MySQL error', err.code);
	});
	connection.on('close', function (err) {
	  console.error(new Date(), 'MySQL close', err);
	});
});

module.exports = connection;
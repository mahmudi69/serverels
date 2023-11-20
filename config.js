var config = {
	debug: false,
	database: {
	    connectionLimit: 500,
	    host: "localhost",
	    user: "u1576978_tanisejat",
	    password: "tanisejati",
	    database: "u1576978_els",
	    charset : "utf8mb4",
	    debug: false,
	    waitForConnections: true,
	    multipleStatements: true
	},
	cors: {
		origin: '*',
 		optionsSuccessStatus: 200
	}
}

module.exports = config; 
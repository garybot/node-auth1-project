const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

const sessionConfig = {
	name: "giuseppe",
	secret: "O'Mally the Alley Cat.",
	cookie: {
		maxAge: 1000 * 60 * 60,
		secure: false, // true in production
		httpOnly: true,
	},
	resave: false,
	saveUnitialized: false, // GDPR Compliance
};

module.exports = server => {
	server.use(helmet());
	server.use(express.json());
	server.use(cors());
	server.use(session(sessionConfig));
}

const express = require('express');
const session = require("express-session")


// const authenticate = require('./auth/authenticate-middleware');
const authRouter = require('../auth/auth-router');
const jokesRouter = require('../jokes/jokes-router.js');

const server = express();
server.use(express.json());
server.use(session({
	resave: false, 
	saveUninitialized: false, 
	secret: process.env.JWT_SECRET,
}))

server.use(authRouter);
server.use(jokesRouter);

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server 

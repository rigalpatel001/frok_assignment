import "dotenv/config";
const express = require("express");
const nextApp = require("next");

const bodyParser = require("body-parser");
import jwt from "jsonwebtoken";
import {
	ApolloServer,
	AuthenticationError,
	gql
} from "apollo-server-express";

import schema from "./schema";
import resolvers from "./resolvers";
//import models, { connectDb } from './models';
import models, {
	sequelize
} from "./models";

const port = parseInt(process.env.PORT, 10) || 8500;
const dev = process.env.NODE_ENV !== "production";
const app = nextApp({
	dev
});
const handle = app.getRequestHandler();

const getMe = async req => {
	const token = req.headers["x-token"];

	if (token) {
		try {
			return await jwt.verify(token, process.env.SECRET);
		} catch (e) {
			throw new AuthenticationError("Your session expired. Sign in again.");
		}
	}
};

app.prepare().then(() => {
	const server = express();

	const apolloServer = new ApolloServer({
		typeDefs: schema,
		resolvers,
		formatError: error => {
			// remove the internal sequelize error message
			// leave only the important validation error
			const message = error.message
				.replace("SequelizeValidationError: ", "")
				.replace("Validation error: ", "");

			return {
				...error,
				message
			};
		},
		context: async ({
			req
		}) => {
			const me = await getMe(req);
			return {
				models,
				me,
				secret: process.env.SECRET
			};
		}
	});

	apolloServer.applyMiddleware({
		app: server
	}); // app is from an existing express app

	server.get("*", (req, res) => {
		return handle(req, res);
	});

	sequelize.sync({
		force: false
	}).then(async () => {
		// if (isTest) {
		// // reset database
		// await Promise.all([models.User.deleteMany({}), models.Job.deleteMany({})]);

		// createUsersWithJobs(new Date());
		// }
		//createUsersWithJobs(new Date());
		server.listen(port, error => {
			if (error) throw error;
			console.log(`Server started on http://localhost:${port}`);
		});
	});
});
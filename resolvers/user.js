import jwt from "jsonwebtoken";
import { AuthenticationError, UserInputError } from "apollo-server";

const createToken = async (user, secret, expiresIn) => {
	const { id, email } = user;
	return await jwt.sign({ id, email }, secret, {
		expiresIn
	});
};

export default {
	Query: {
		users: async (parent, { offset = 0, limit = 2 }, { models }) => {
			return await models.User.findAll({
				offset,
				limit
			});
		},
		user: async (parent, { id }, { models }) => {
			return await models.User.findByPk(id);
		},
		me: async (parent, args, { models, me }) => {
			if (!me) {
				return null;
			}

			return await models.User.findByPk(me.id);
		}
	},
	Mutation: {
		signUp: async (
			parent,
			{
				email,
				password,
				profileImage,
				gender,
				country,
				state,
				city,
				contactnumber,
				skills,
				birthdate
			},

			{ models, secret }
		) => {
			const user = await models.User.create({
				email,
				password,
				profileImage,
				gender,
				country,
				state,
				city,
				contactnumber,
				skills,
				birthdate
			});
			return { token: createToken(user, secret, "30m") };
		},
		signIn: async (parent, { login, password }, { models, secret }) => {
			const user = await models.User.findByLogin(login);
			if (!user) {
				throw new UserInputError("Invalid Username or password!");
			}
			const isValid = await user.validatePassword(password);
			if (!isValid) {
				throw new AuthenticationError("Invalid Username or password!");
			}
			return { token: createToken(user, secret, "30m") };
		}
	},

	User: {
		country: async (user, args, { models }) => {
			return await models.Country.findAll({
				where: {
					id: user.country
				}
			});
		},
		state: async (user, args, { models }) => {
			return await models.States.findAll({
				where: {
					id: user.state
				}
			});
		},
		city: async (user, args, { models }) => {
			return await models.City.findAll({
				where: {
					id: user.city
				}
			});
		}
	}
};

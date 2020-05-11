import { gql } from "apollo-server-express";
export default gql`
	extend type Query {
		users(offset: Int, limit: Int): [User!]
		user(id: ID!): User
		me: User
	}

	extend type Mutation {
		signUp(
			email: String!
			password: String!
			profileImage: String
			gender: String
			country: String!
			state: String!
			city: String!
			contactnumber: String!
			skills: String
			birthdate: String
		): Token!

		signIn(login: String!, password: String!): Token!
	}
	type Token {
		token: String!
	}

	type User {
		id: ID!
		email: String!
		profileImage: String!
		gender: String!
		country: [Country!]
		state: [State!]
		city: [City!]
		contactnumber: String!
		skills: String!
		birthdate: String!
	}
`;

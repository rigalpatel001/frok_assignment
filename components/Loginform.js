import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import React from "react";
import Router from "next/router";
import Joi from "joi-browser";
import { getJWTTokenData } from "../util/Common";

const SIGNIN = gql`
	mutation signIn($login: String!, $password: String!) {
		signIn(login: $login, password: $password) {
			token
		}
	}
`;

const schema = {
	login: Joi.string()
		.required()
		.error(errors => {
			return {
				message: "Username is required!"
			};
		}),
	password: Joi.string()
		.required()
		.error(errors => {
			return {
				message: "Password is required!"
			};
		})
};

class Loginform extends React.Component {
	state = {
		login: "",
		password: "",
		errors: ""
	};
	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	validate(login, password) {
		let errors = "";
		const result = Joi.validate(
			{
				login: login,
				password: password
			},
			schema
		);
		if (result.error) {
			errors = result.error.details[0].message;
		}
		return errors;
	}

	componentDidMount() {
		let jwttokenres = getJWTTokenData();
		if (jwttokenres && jwttokenres != "") {
			if (jwttokenres.exp > Date.now() / 1000) {
				Router.push("/profile");
				return false;
			}
		}
	}

	render() {
		let input;
		const { errors } = this.state;

		return (
			<Mutation mutation={SIGNIN} errorPolicy="all">
				{(signIn, { loading, error }) => (
					<div className="col-md-6 col-md-offset-3">
						<form
							onSubmit={e => {
								console.log("=======here=======");
								console.log("error=", error);

								e.preventDefault();
								const errors = this.validate(
									e.target.login.value,
									e.target.password.value
								);
								if (errors) {
									console.log("=======errors=======");
									console.log("errors=", errors);
									this.setState({ errors });
									return;
								}
								if (!errors) {
									signIn({
										variables: {
											login: e.target.login.value,
											password: e.target.password.value
										}
									})
										.then(response => {
											console.log("================");
											console.log("response=", response.data.signIn.token);
											if (typeof response.data.signIn.token != "undefined") {
												localStorage.setItem(
													"token",
													response.data.signIn.token
												);
												Router.push("/profile");
											}
										})
										/* .catch(errors => {
											console.log("====catch====");
											console.log("errors: ", errors.message);
											console.log(errors.message);
										}); */
										.catch(res => {
											const errors = res.graphQLErrors.map(error => {
												return error.message;
											});
											console.log(errors[0]);
											this.setState({ errors: errors[0] });
											return;
											//this.setState({ errors });
										});
								}
							}}
						>
							{errors && <p>{errors}</p>}
							<input
								type="text"
								name="login"
								id="name"
								placeholder="User Name"
								value={this.state.login}
								onChange={this.handleChange}
							/>
							<input
								type="password"
								name="password"
								id="password"
								value={this.state.password}
								placeholder="Password"
								onChange={this.handleChange}
							/>

							<button type="submit">Login</button>
							<style jsx>{`
								form {
									padding-bottom: 20px;
									margin-bottom: 20px;
								}
								h1 {
									font-size: 20px;
								}
								input {
									display: block;
									margin-bottom: 10px;
								}
								form button {
									margin-right: 10px;
								}
								form p {
									color: red;
								}
							`}</style>
						</form>
						{loading && <span>Loading...</span>}
					</div>
				)}
			</Mutation>
		);
	}
}

export default Loginform;

import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import React, { Fragment } from "react";
import Router from "next/router";
import Joi from "joi-browser";
import Select from "react-select";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	TimePicker,
	DatePicker
} from "material-ui-pickers";
import { DateTimePicker } from "material-ui-pickers";
import { getJWTTokenData } from "../util/Common";

const GET_COUNTRY = gql`
	query country {
		country {
			id
			name
		}
	}
`;

const GET_STATE = gql`
	query state($id: ID!) {
		state(id: $id) {
			id
			name
		}
	}
`;

const GET_CITY = gql`
	query city($id: ID!) {
		city(id: $id) {
			id
			name
		}
	}
`;

const GET_COUNTRYCODE = gql`
	query countrycode($name: String!) {
		countrycode(name: $name) {
			name
			dial_code
		}
	}
`;

const SIGNUP = gql`
	mutation signUp(
		$email: String!
		$country: String!
		$state: String!
		$city: String!
		$contactnumber: String!
		$password: String!
		$gender: String
		$profileImage: String
		$skills: String
		$birthdate: String
	) {
		signUp(
			email: $email
			country: $country
			state: $state
			city: $city
			contactnumber: $contactnumber
			password: $password
			gender: $gender
			profileImage: $profileImage
			skills: $skills
			birthdate: $birthdate
		) {
			token
		}
	}
`;

const schema = {
	email: Joi.string()
		.email()
		.required()
		.error(errors => {
			return {
				message: "Email is required OR Email should be a valid email address!"
			};
		}),
	country: Joi.string()
		.required()
		.error(errors => {
			return {
				message: "Country is required!"
			};
		}),
	state: Joi.string()
		.required()
		.error(errors => {
			return {
				message: "State is required!"
			};
		}),
	city: Joi.string()
		.required()
		.error(errors => {
			return {
				message: "City is required!"
			};
		}),
	countrycode: Joi.string()
		.required()
		.error(errors => {
			return {
				message: "Country Code is required!"
			};
		}),
	contactno: Joi.string()
		.regex(/^[\s()+-]*([0-9][\s()+-]*){6,20}$/)
		.required()
		.error(errors => {
			return {
				message: "Phone No is required OR Phone number should be valid!"
			};
		}),
	password: Joi.string()
		.required()
		.error(errors => {
			return {
				message: "Password is required!"
			};
		}),
	confirm_password: Joi.string()
		.required()
		.error(errors => {
			return {
				message: "Confirm Password is required!"
			};
		})
};

let checkboxarr = {};

class Signupform extends React.Component {
	state = {
		id: "",
		email: "",
		country: 0,
		state: 0,
		city: 0,
		countrycode: "",
		contactno: "",
		password: "",
		confirm_password: "",
		isClearable: true,
		profilePreviewUrl: "",
		skillsarr: [],
		birthdate: new Date(),
		countryname: ""
	};
	handleChange = name => event => {
		this.setState({ [name]: event.target.value });
	};

	handleOptionChange = name => selectedOption => {
		if (selectedOption != null) {
			if (selectedOption.value != "") {
				this.setState({ [name]: selectedOption.value });
			}
			if (name == "country") {
				this.setState({ countryname: selectedOption.label });
			}
		} else {
			this.setState({ [name]: "" });
		}
	};

	validate(
		email,
		country,
		state,
		city,
		countrycode,
		contactno,
		password,
		confirm_password
	) {
		let errors = "";
		const result = Joi.validate(
			{
				email: email,
				country: country,
				state: state,
				city: city,
				countrycode: countrycode,
				contactno: contactno,
				password: password,
				confirm_password: confirm_password
			},
			schema
		);
		if (result.error) {
			errors = result.error.details[0].message;
		}
		return errors;
	}

	handleCheckBox = name => event => {
		//this.setState({ [name]: event.target.checked });

		checkboxarr[name] = event.target.checked;
		if (event.target.checked == false) {
			delete checkboxarr[name];
		}
		this.setState({
			skillsarr: checkboxarr
		});
	};

	_handleImageChange(e) {
		e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
			this.setState({
				file: file,
				imagePreviewUrl: reader.result
			});
		};

		reader.readAsDataURL(file);
	}

	handleDateChange = name => date => {
		this.setState({ [name]: date });
	};

	toggleClearable = () =>
		this.setState(state => ({ isClearable: !state.isClearable }));

	render() {
		let input;
		const { errors, isClearable } = this.state;
		let $profileImagePreview = null;
		let { imagePreviewUrl } = this.state;
		console.log("state=", this.state);

		if (imagePreviewUrl) {
			$profileImagePreview = <img src={imagePreviewUrl} />;
		}

		return (
			<Fragment>
				<h2>Register</h2>
				<Mutation mutation={SIGNUP}>
					{(signUp, { loading, error }) => (
						<div>
							<form
								onSubmit={e => {
									e.preventDefault();
									const errors = this.validate(
										this.state.email,
										this.state.country,
										this.state.state,
										this.state.city,
										this.state.countrycode,
										this.state.contactno,
										this.state.password,
										this.state.confirm_password
									);
									if (errors) {
										this.setState({ errors });
										return;
									}
									if (!errors) {
										//Password compare Validation
										if (this.state.password != this.state.confirm_password) {
											this.setState({
												errors: "Password and Confirm Password mismatched!"
											});
											return;
										}

										//Valid Image Validation
										if (
											this.state.file != undefined &&
											this.state.file != "undefined"
										) {
											let filesize = this.state.file.size / 1000000;
											if (filesize > 5) {
												this.setState({
													errors: "File size exceeds 5 MB!"
												});
												return;
											}
											let fileExtension = this.state.file.name.substr(
												this.state.file.name.lastIndexOf(".") + 1
											);
											let extensionArr = ["gif", "png", "jpeg", "jpg"];
											fileExtension = fileExtension.toLowerCase();
											if (extensionArr.includes(fileExtension) === false) {
												this.setState({
													errors: "Please upload valid file!"
												});
												return;
											}
										}
										let skillJson = "";
										if (typeof this.state.skillsarr != "undefined") {
											skillJson = JSON.stringify(this.state.skillsarr);
										}
										console.log("skillJson=", skillJson);
										let phone_number =
											this.state.countrycode + " " + this.state.contactno;

										signUp({
											variables: {
												email: this.state.email,
												country: this.state.country,
												state: this.state.state,
												city: this.state.city,
												contactnumber: phone_number,
												password: this.state.password,
												gender: this.state.gender,
												profileImage: imagePreviewUrl,
												skills: skillJson,
												birthdate: this.state.birthdate
											}
										})
											.then(() => Router.push("/"))
											.catch(res => {
												const errors = res.graphQLErrors.map(error => {
													return error.message;
												});
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
									name="email"
									id="email"
									placeholder="Email"
									value={this.state.email}
									onChange={this.handleChange("email")}
								/>
								<Query query={GET_COUNTRY}>
									{({ loading, error, data: { country } }) => {
										if (error) return <p>{error}</p>;
										if (loading) return <div>Loading...</div>;

										let countrysuggestions = [];
										let selectedOptionCountry = "";

										country.map((countrylist, index) => {
											if (countrylist.id == this.state.country) {
												selectedOptionCountry = {
													value: countrylist.id,
													label: countrylist.name
												};
											}

											countrysuggestions.push({
												value: countrylist.id,
												label: countrylist.name
											});
										});

										return (
											<Select
												value={selectedOptionCountry}
												name="country"
												id="country"
												onChange={this.handleOptionChange("country")}
												options={countrysuggestions}
												placeholder="Country"
												isClearable={isClearable}
											/>
										);
									}}
								</Query>
								<br></br>
								<Query query={GET_STATE} variables={{ id: this.state.country }}>
									{({ loading, error, data: { state } }) => {
										if (error) return <p>{error}</p>;
										if (loading) return <div>Loading...</div>;

										let statesuggestions = [];
										let selectedOptionState = "";

										state.map((statelist, index) => {
											if (statelist.id == this.state.state) {
												selectedOptionState = {
													value: statelist.id,
													label: statelist.name
												};
											}

											statesuggestions.push({
												value: statelist.id,
												label: statelist.name
											});
										});

										return (
											<Select
												value={selectedOptionState}
												name="state"
												id="state"
												onChange={this.handleOptionChange("state")}
												options={statesuggestions}
												placeholder="State"
												isClearable={isClearable}
											/>
										);
									}}
								</Query>
								<br></br>
								<Query query={GET_CITY} variables={{ id: this.state.state }}>
									{({ loading, error, data: { city } }) => {
										if (error) return <p>{error}</p>;
										if (loading) return <div>Loading...</div>;

										let citysuggestions = [];
										let selectedOptionCity = "";

										city.map((citylist, index) => {
											if (citylist.id == this.state.city) {
												selectedOptionCity = {
													value: citylist.id,
													label: citylist.name
												};
											}

											citysuggestions.push({
												value: citylist.id,
												label: citylist.name
											});
										});

										return (
											<Select
												value={selectedOptionCity}
												name="city"
												id="city"
												onChange={this.handleOptionChange("city")}
												options={citysuggestions}
												placeholder="City"
												isClearable={isClearable}
											/>
										);
									}}
								</Query>
								<br></br>
								<Query
									query={GET_COUNTRYCODE}
									variables={{ name: this.state.countryname }}
								>
									{({ loading, error, data: { countrycode } }) => {
										if (error) return <p>{error}</p>;
										if (loading) return <div>Loading...</div>;

										let countrycodesuggestions = [];
										let selectedOptionCountryCode = "";

										countrycode.map((countrycodelist, index) => {
											if (countrycodelist.dial_code == this.state.countrycode) {
												selectedOptionCountryCode = {
													value: countrycodelist.dial_code,
													label: countrycodelist.dial_code
												};
											}

											countrycodesuggestions.push({
												value: countrycodelist.dial_code,
												label: countrycodelist.dial_code
											});
										});

										return (
											<Select
												value={selectedOptionCountryCode}
												name="countrycode"
												id="countrycode"
												onChange={this.handleOptionChange("countrycode")}
												options={countrycodesuggestions}
												placeholder="Country Code"
												isClearable={isClearable}
											/>
										);
									}}
								</Query>
								<br></br>
								<input
									type="text"
									name="contactno"
									id="contactno"
									placeholder="Contact No"
									value={this.state.contactno}
									onChange={this.handleChange("contactno")}
								/>
								<input
									type="password"
									name="password"
									id="password"
									value={this.state.password}
									placeholder="Password"
									onChange={this.handleChange("password")}
								/>
								<input
									type="password"
									name="confirm_password"
									id="confirm_password"
									value={this.state.confirm_password}
									placeholder="Confirm Password"
									onChange={this.handleChange("confirm_password")}
								/>
								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									<DateTimePicker
										ampm={false}
										format="yyyy-MM-dd"
										//className={classes.datepicker}
										name="birthdate"
										value={this.state.birthdate}
										onChange={this.handleDateChange("birthdate")}
										label="Date Of Birth"
										maxDate={new Date()}
									/>
								</MuiPickersUtilsProvider>
								<br></br>
								<br></br>
								<input
									className="fileInput"
									type="file"
									label="Profile Picture"
									name="profile_image"
									id="profile_image"
									onChange={e => this._handleImageChange(e, "profile_image")}
									//className={classNames(classes.filetype, classes.width80)}
								/>
								<div>{$profileImagePreview}</div>
								<br></br>
								<input
									name="employee"
									type="checkbox"
									value="Developer"
									onChange={this.handleCheckBox("Developer")}
								/>{" "}
								Developer
								<input
									name="employee"
									type="checkbox"
									value="QA"
									onChange={this.handleCheckBox("QA")}
								/>{" "}
								QA
								<input
									name="employee"
									type="checkbox"
									value="BDE"
									onChange={this.handleCheckBox("BDE")}
								/>{" "}
								BDE
								<input
									name="employee"
									type="checkbox"
									value="BA"
									onChange={this.handleCheckBox("BA")}
								/>{" "}
								BA
								<input
									name="employee"
									type="checkbox"
									value="HR"
									onChange={this.handleCheckBox("HR")}
								/>{" "}
								HR
								<br></br>
								<input
									type="radio"
									name="gender"
									value="male"
									onChange={this.handleChange("gender")}
								/>{" "}
								Male
								<input
									type="radio"
									name="gender"
									value="female"
									onChange={this.handleChange("gender")}
								/>{" "}
								Female
								<button className="button" yype="submit">
									Register
								</button>
							</form>
							{loading && <span>Loading...</span>}
						</div>
					)}
				</Mutation>
				<style jsx>{`
					.button {
						padding: 10px 15px;
						font-size: 12px;
						text-align: center;
						cursor: pointer;
						outline: none;
						color: #fff;
						background-color: #4caf50;
						border: none;
						border-radius: 15px;
						box-shadow: 0 9px #999;
						margin-top: 20px;
						display: block;
					}
					.button:hover {
						background-color: #3e8e41;
					}
					.button:active {
						background-color: #3e8e41;
						box-shadow: 0 5px #666;
						transform: translateY(4px);
					}
					form {
						display: table-cell;
						padding: 10px;
						padding: 10px 20px;
						background: #f4f7f8;
						margin: 10px auto;
						padding: 20px;
						background: #f4f7f8;
						border-radius: 8px;
					}
					input[type="text"],
					input[type="date"],
					input[type="email"],
					input[type="password"],
					textarea,
					select {
						font-family: Georgia, "Times New Roman", Times, serif;
						background: rgba(255, 255, 255, 0.1);
						border: none;
						border-radius: 4px;
						font-size: 15px;
						margin: 0;
						outline: 0;
						padding: 10px;
						width: 100%;
						box-sizing: border-box;
						-webkit-box-sizing: border-box;
						-moz-box-sizing: border-box;
						background-color: #e8eeef;
						color: #8a97a0;
						-webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
						box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
						margin-bottom: 30px;
					}
				`}</style>
			</Fragment>
		);
	}
}

export default Signupform;

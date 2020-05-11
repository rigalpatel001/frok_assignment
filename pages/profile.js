import React from "react";
import App from "../components/App";
import Header from "../components/Header";
import UserList from "../components/UserList";

import jwtDecode from "jwt-decode";
const tokenKey = "token";
import Router from "next/router";

class Profile extends React.Component {
	state = {
		name: "",
		email: ""
	};

	constructor(props) {
		super(props);
	}
	componentDidMount() {
		let jwt = "";
		if (localStorage.getItem(tokenKey)) {
			jwt = localStorage.getItem(tokenKey);
		}

		if (jwt != "" && jwt != null) {
			let tokeninfo = jwtDecode(jwt);
			this.setState({
				name: tokeninfo.username,
				email: tokeninfo.email
			});
		} else {
			Router.push("/");
		}
	}
	render() {
		return (
			<App>
				<Header />
				<div>Hello, {this.state.email}</div>
				<UserList />
			</App>
		);
	}
}

export default Profile;

import React from "react";
import App from "../components/App";
import Header from "../components/Header";
const tokenKey = "token";
import Router from "next/router";

class Logout extends React.Component {
	componentDidMount() {
		localStorage.removeItem(tokenKey);
		Router.push("/");
	}
	render() {
		return (
			<App>
				<Header />
			</App>
		);
	}
}

export default Logout;

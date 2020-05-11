import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";
const tokenKey = "token";

class Header extends React.Component {
	state = {
		jwttoken: ""
	};
	componentDidMount() {
		const jwt = localStorage.getItem(tokenKey);

		if (jwt != "" && jwt != null) {
			this.setState({
				jwttoken: jwt
			});
		}
	}
	render() {
		return (
			<header>
				{!this.state.jwttoken && (
					<Link prefetch href="/">
						<a component={Link} to="/">
							Home
						</a>
					</Link>
				)}
				{!this.state.jwttoken && (
					<Link prefetch href="/signup">
						<a component={Link} to="/signup">
							Sign Up
						</a>
					</Link>
				)}
				{this.state.jwttoken && (
					<Link prefetch href="/profile">
						<a component={Link} to="/profile">
							Profile
						</a>
					</Link>
				)}
				{this.state.jwttoken && (
					<Link prefetch href="/logout">
						<a component={Link} to="/logout">
							Logout
						</a>
					</Link>
				)}
				<style jsx>{`
					header {
						margin-bottom: 25px;
					}
					a {
						font-size: 14px;
						margin-right: 15px;
						text-decoration: none;
					}
					.is-active {
						text-decoration: underline;
					}
				`}</style>
			</header>
		);
	}
}

export default withRouter(Header);

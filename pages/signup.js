import { Query } from "react-apollo";
import gql from "graphql-tag";
import React from "react";
import Signupform from "../components/Signupform";
import Select from "react-select";
import App from "../components/App";
import Header from "../components/Header";

const GET_STATE = gql`
	query country {
		country {
			id
			name
		}
	}
`;

class Signup extends React.Component {
	static async getInitialProps({ query }) {
		const { id } = query;
		return { id };
	}
	render() {
		return (
			<App>
				<Header />
				<Signupform />
			</App>
		);
	}
}

export default Signup;

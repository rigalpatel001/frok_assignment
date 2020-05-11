import Router from "next/router";
import jwtDecode from "jwt-decode";

export function getJWTTokenData() {
	let jwt = "";
	let tokeninfo = "";
	try {
		if (localStorage.getItem("token")) {
			jwt = localStorage.getItem("token");
		}

		if (jwt != "" && jwt != null) {
			tokeninfo = jwtDecode(jwt);
		} else {
			localStorage.removeItem("token");

			Router.push("/");
		}
		return tokeninfo;
	} catch (e) {
		return null;
	}
}

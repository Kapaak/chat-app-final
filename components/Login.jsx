import React, { useState } from "react";
import { useRouter } from "next/router";
import { handleUsernameSubmit } from "../globalState/globalFunctions";

const Login = () => {
	console.warn("Login,rerendered");

	const router = useRouter();

	const [login, setLogin] = useState("");

	const handleSubmit = e => {
		handleUsernameSubmit(e, login);
		router.push("/chat");
	};

	return (
		<form onSubmit={e => handleSubmit(e)}>
			<input
				type="text"
				value={login}
				onChange={e => setLogin(e.target.value)}
			/>
			<button>submit login</button>
		</form>
	);
};

export default Login;

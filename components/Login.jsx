import React, { useState } from "react";
import { useRouter } from "next/router";
import { handleUsernameSubmit } from "../globalState/globalFunctions";
import styled from "styled-components";

const Login = () => {
	console.warn("Login,rerendered");

	const router = useRouter();

	const [login, setLogin] = useState("");

	const handleSubmit = e => {
		handleUsernameSubmit(e, login);
		router.push("/chat");
	};

	return (
		<StyledLogin>
			<h1>Enter your name</h1>
			<form onSubmit={e => handleSubmit(e)}>
				<input
					type="text"
					value={login}
					onChange={e => setLogin(e.target.value)}
				/>
				<button>submit login</button>
			</form>
		</StyledLogin>
	);
};

const StyledLogin = styled.div`
	background: rgba(255, 255, 255, 0.596);
	border-radius: 0.35rem;
	padding: 2rem;

	h1 {
		font-size: 3rem;
		color: #1d1d1d;
	}

	input {
		margin: 2rem 1rem 0 0;
		padding: 0.5rem;
	}

	button {
		height: 2.9rem;
		padding: 0.5rem;
		cursor: pointer;
		background-color: #eb8d22;
		border: none;
	}
`;

export default Login;

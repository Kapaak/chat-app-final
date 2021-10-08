import React, { useState } from "react";
import { useRouter } from "next/router";
import { handleUsernameSubmit } from "../../globalState/globalFunctions";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
			<FormItem>
				<h3>username</h3>
				<FormInput
					type="text"
					value={login}
					onChange={e => setLogin(e.target.value)}
				/>
			</FormItem>
			<FormItem>
				<h3>avatar</h3>
				<div>OOOO</div>
			</FormItem>
			<FormButtonWrapper>
				<FormButton>
					<FontAwesomeIcon icon={faArrowRight} />
				</FormButton>
			</FormButtonWrapper>
		</form>
		// <StyledLogin>
		// 	<form onSubmit={e => handleSubmit(e)}>
		// 		<input
		// 			type="text"
		// 			value={login}
		// 			onChange={e => setLogin(e.target.value)}
		// 		/>
		// 		<button>submit login</button>
		// 	</form>
		// </StyledLogin>
	);
};

const FormButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const FormItem = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 6rem;
	h3 {
		font-size: 1.8rem;
	}
`;

const FormInput = styled.input`
	background-color: transparent;
	border: none;
	border-bottom: 1px solid var(--s-col);

	&:focus {
		outline: none;
		border-bottom: 2px solid var(--s-col);
	}
`;

const FormButton = styled.button`
	background-color: var(--s-col);
	height: 6rem;
	width: 6rem;
	border-radius: 50%;
	border: none;
	box-shadow: 0 0 32px 2px #c9c9c9;
	margin-top: 6rem;
	cursor: pointer;

	svg {
		color: var(--f-col);
		font-size: 2rem;
	}
`;

// const StyledLogin = styled.div`
// 	background: rgba(255, 255, 255, 0.596);
// 	border-radius: 0.35rem;
// 	padding: 2rem;

// 	h1 {
// 		font-size: 3rem;
// 		color: #1d1d1d;
// 	}

// 	input {
// 		margin: 2rem 1rem 0 0;
// 		padding: 0.5rem;
// 	}

// 	button {
// 		height: 2.9rem;
// 		padding: 0.5rem;
// 		cursor: pointer;
// 		background-color: #eb8d22;
// 		border: none;
// 	}
// `;

export default Login;

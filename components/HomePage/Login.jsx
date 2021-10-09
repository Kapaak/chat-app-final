import React, { useState } from "react";
import { useRouter } from "next/router";
import { handleUsernameSubmit } from "../../globalState/globalFunctions";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Avatar from "avataaars";

import { state } from "../../globalState";
import { avatarConfigs } from "../../globalState/globalFunctions";

const Login = () => {
	console.warn("Login,rerendered");

	const router = useRouter();

	const [login, setLogin] = useState("");
	const [highlightSelected, setHighlightSelected] = useState(-1);

	const handleSubmit = e => {
		handleUsernameSubmit(e, login);
		router.push("/chat");
	};

	const handleSelectedAvatar = number => {
		state.selectedAvatar = number;
		setHighlightSelected(number);
		console.log("handled");
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
				<AvatarsContainer>
					{avatarConfigs(-1).map((a, i) => (
						<AvatarWrapper
							key={i}
							onClick={() => handleSelectedAvatar(i)}
							isSelected={highlightSelected - i}
						>
							<Avatar {...a} />
						</AvatarWrapper>
					))}
				</AvatarsContainer>
			</FormItem>
			<FormButtonWrapper>
				<FormButton>
					<FontAwesomeIcon icon={faArrowRight} />
				</FormButton>
			</FormButtonWrapper>
		</form>
	);
};

const AvatarsContainer = styled.div`
	display: flex;
	max-width: 23rem;
	overflow: auto;
`;

const AvatarWrapper = styled.div`
	opacity: ${({ isSelected }) => (isSelected === 0 ? "1" : ".3")};
`;

const FormButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const FormItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 6rem;
	h3 {
		font-size: 1.8rem;
	}

	svg {
		cursor: pointer;
		width: 8rem;
		height: 8rem;
		transition: all 0.2s ease-in-out;

		&:hover {
			transform: scale(1.2);
			transition: all 0.2s ease-in-out;
		}
	}
`;

const FormInput = styled.input`
	background-color: transparent;
	border: none;
	border-bottom: 1px solid var(--fff-col);
	width: 23rem;
	transition: all 0.2s ease-in-out;

	&:hover {
		border-bottom: 1px solid var(--s-col);
		transition: all 0.2s ease-in-out;
	}

	&:focus {
		border-bottom: 1px solid var(--s-col);
		transition: all 0.2s ease-in-out;
		outline: none;
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
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 0 32px 2px #8f91f5b7;
		transition: all 0.2s ease-in-out;
	}

	svg {
		color: var(--f-col);
		font-size: 2rem;
		width: 2rem;
	}
`;

export default Login;

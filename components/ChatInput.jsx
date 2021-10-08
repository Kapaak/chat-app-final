import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { handleChatSubmit } from "../globalState/globalFunctions";

const ChatInput = ({ username }) => {
	const [message, setMessage] = useState("");
	console.log("ChatInput,rerendered");

	const submitHandler = (e, message) => {
		handleChatSubmit(e, username, message);
		setMessage("");
	};

	return (
		<StyledLogin>
			<form action="" onSubmit={e => submitHandler(e, message)}>
				<input
					type="text"
					onChange={e => setMessage(e.target.value)}
					placeholder="enter a message"
					value={message}
				/>
				<button>
					<FontAwesomeIcon icon={faPaperPlane} />
				</button>
			</form>
		</StyledLogin>
	);
};

const StyledLogin = styled.div`
	margin-top: auto;

	form {
		position: relative;
		display: flex;
		align-items: center;
	}

	input {
		flex: 1;
	}

	button {
		width: 1.7rem;
		/* position: absolute;
		right: 1rem;
		border: none;
		background: transparent;
		font-size: 2rem;
		cursor: pointer; */
	}
`;

export default ChatInput;

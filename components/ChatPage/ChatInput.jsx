import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { handleChatSubmit } from "../../globalState/globalFunctions";

const ChatInput = ({ username, selectedAvatar }) => {
	const [message, setMessage] = useState("");
	console.log("ChatInput,rerendered");

	const submitHandler = (e, message) => {
		handleChatSubmit(e, username, message, selectedAvatar);
		setMessage("");
	};

	return (
		<StyledLogin>
			<form action="" onSubmit={e => submitHandler(e, message)}>
				<input
					type="text"
					onChange={e => setMessage(e.target.value)}
					placeholder="type something..."
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
		box-shadow: 0 0 32px 2px #e8e8e8;
		margin-bottom: 3rem;
	}

	input {
		flex: 1;
		height: 4rem;
		padding: 0 1.5rem;
		/* border-radius: 2rem; */
		border: none;
	}

	button {
		width: 2rem;
		position: absolute;
		right: 1.8rem;
		border: none;
		background: transparent;
		color: var(--s-col);
		cursor: pointer;
		font-size: 2rem;
	}
`;

export default ChatInput;

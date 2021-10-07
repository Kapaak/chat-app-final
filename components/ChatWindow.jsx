import React, { useState } from "react";

import { handleChatSubmit } from "../globalState/globalFunctions";

const ChatWindow = ({ username }) => {
	const [message, setMessage] = useState("");
	console.log("chatWindow,rerendered");

	const submitHandler = (e, message) => {
		// handleSubmit(e, message);
		handleChatSubmit(e, username, message);
		setMessage("");
	};

	return (
		<form action="" onSubmit={e => submitHandler(e, message)}>
			<input
				type="text"
				onChange={e => setMessage(e.target.value)}
				placeholder="enter a message"
				value={message}
			/>
			<button>submit</button>
		</form>
	);
};

export default ChatWindow;

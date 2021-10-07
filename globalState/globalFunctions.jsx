import axios from "axios";

import { state } from "./index";

export const handleUsernameSubmit = (e, username) => {
	e.preventDefault();
	state.username = username;
};

export const handleChatSubmit = async (e, username, message) => {
	e.preventDefault();
	//sending message and username from state to backend
	await axios.post("/api/pusher", {
		message,
		username,
	});
};

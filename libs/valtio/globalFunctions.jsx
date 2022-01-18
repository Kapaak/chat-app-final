import axios from "axios";

import { state } from "./index";

export const handleUsernameSubmit = (e, username) => {
	e.preventDefault();
	state.username = username;
};

export const handleChatSubmit = async (
	e,
	username,
	message,
	selectedAvatar
) => {
	e.preventDefault();
	//sending message and username from state to backend
	// await axios.post("/api/pusher", {
	// 	message,
	// 	username,
	// 	selectedAvatar,
	// });
};

export const avatarConfigs = number => {
	const configArray = [
		{
			sex: "man",
			faceColor: "#F9C9B6",
			earSize: "small",
			eyeStyle: "smile",
			noseStyle: "short",
			mouthStyle: "laugh",
			shirtStyle: "polo",
			glassesStyle: "none",
			hairColor: "#000",
			hairStyle: "thick",
			hatStyle: "none",
			hatColor: "#F48150",
			eyeBrowStyle: "up",
			shirtColor: "#21d12a",
			bgColor: "#E0DDFF",
		},
		{
			sex: "woman",
			faceColor: "#F9C9B6",
			earSize: "small",
			eyeStyle: "oval",
			noseStyle: "long",
			mouthStyle: "peace",
			shirtStyle: "polo",
			glassesStyle: "none",
			hairColor: "#FC909F",
			hairStyle: "womanShort",
			hatStyle: "none",
			hatColor: "#000",
			eyeBrowStyle: "up",
			shirtColor: "#F4D150",
			bgColor: "linear-gradient(45deg, #ff1717 0%, #ffd368 100%)",
		},
		{
			sex: "man",
			faceColor: "#F9C9B6",
			earSize: "small",
			eyeStyle: "oval",
			noseStyle: "round",
			mouthStyle: "laugh",
			shirtStyle: "polo",
			glassesStyle: "none",
			hairColor: "#F48150",
			hairStyle: "thick",
			hatStyle: "none",
			hatColor: "#77311D",
			eyeBrowStyle: "up",
			shirtColor: "#6BD9E9",
			bgColor: "linear-gradient(45deg, #56b5f0 0%, #45ccb5 100%)",
		},
	];
	if (number === -1) return configArray;
	return configArray[number];
};

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

export const avatarConfigs = number => {
	const configArray = [
		{
			avatarStyle: "Circle",
			topType: "ShortHairShortWaved",
			accessoriesType: "Blank",
			hairColor: "Black",
			facialHairType: "Blank",
			clotheType: "CollarSweater",
			clotheColor: "Blue03",
			eyeType: "Default",
			eyebrowType: "Default",
			mouthType: "Smile",
			skinColor: "Light",
		},
		{
			avatarStyle: "Circle",
			topType: "ShortHairShortFlat",
			accessoriesType: "Blank",
			hairColor: "Brown",
			facialHairType: "BeardLight",
			facialHairColor: "Brown",
			clotheType: "Overall",
			clotheColor: "Blue03",
			eyeType: "Default",
			eyebrowType: "Default",
			mouthType: "Default",
			skinColor: "Light",
		},
		{
			avatarStyle: "Circle",
			topType: "NoHair",
			accessoriesType: "Blank",
			facialHairType: "Blank",
			clotheType: "Hoodie",
			clotheColor: "Black",
			eyeType: "Default",
			eyebrowType: "Default",
			mouthType: "Twinkle",
			skinColor: "Light",
		},
		{
			avatarStyle: "Circle",
			topType: "LongHairStraight2",
			accessoriesType: "Blank",
			hairColor: "Brown",
			facialHairType: "Blank",
			clotheType: "ShirtScoopNeck",
			clotheColor: "Black",
			eyeType: "Wink",
			eyebrowType: "Default",
			mouthType: "Smile",
			skinColor: "Light",
		},
	];
	if (number === -1) return configArray;
	return configArray[number];
};

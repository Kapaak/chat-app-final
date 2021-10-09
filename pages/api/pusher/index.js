import { pusher } from "../../../pusher";

export default async function handler(req, res) {
	const { message, username, selectedAvatar } = req.body;

	await pusher.trigger("presence-channel", "chat-update", {
		message,
		username,
		selectedAvatar,
	});

	res.json({ message: "completed" });
}

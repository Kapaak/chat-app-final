import { pusher } from "../../../pusher";

export default async function handler(req, res) {
	const { message, username } = req.body;

	await pusher.trigger("presence-channel", "chat-update", {
		message,
		username,
	});

	res.json({ message: "completed" });
}
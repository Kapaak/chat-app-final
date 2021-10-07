//route for auth users
import { pusher } from "../../../../pusher";
import { nanoid } from "nanoid";

export default async function handler(req, res) {
	//when user logs in we receive some info about him
	const { socket_id, channel_name, username } = req.body;
	//every user needs unique id
	const uniqueId = nanoid();

	const presenceData = {
		user_id: uniqueId,
		user_info: {
			username,
		},
	};

	try {
		//to authorize user
		const auth = pusher.authenticate(socket_id, channel_name, presenceData);
		res.send(auth);
	} catch (error) {
		console.log(error);
	}
}

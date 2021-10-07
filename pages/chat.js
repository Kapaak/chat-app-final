import { useState, useEffect } from "react";
import Pusher from "pusher-js";
import { useSnapshot } from "valtio";

import { state } from "../globalState";
import ChatWindow from "../components/ChatWindow";

const Chat = () => {
	console.warn("Chat, rerendered");
	const [chat, setChat] = useState([]);
	const { username } = state;

	const pusher = new Pusher(process.env.NEXT_PUBLIC_key, {
		cluster: "eu",
		authEndpoint: "api/pusher/auth",
		auth: { params: { username } },
	});

	useEffect(() => {
		const channel = pusher.subscribe("presence-channel");

		channel.bind("chat-update", data => {
			const { message, username } = data;

			setChat(prevState => [...prevState, { username, message }]);
		});
	}, []);
	return (
		<div>
			<p>user logged in: {useSnapshot(state).username}</p>
			{chat.map((c, i) => (
				<div key={i}>
					<span>message: {c.message} | </span>
					<span>user: {c.username}</span>
				</div>
			))}
			<ChatWindow username={username} />
		</div>
	);
};

export default Chat;

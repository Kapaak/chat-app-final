import { useState, useEffect } from "react";
import Pusher from "pusher-js";
import styled from "styled-components";

import { state } from "../globalState";
import ChatInput from "../components/ChatPage/ChatInput";
import ChatMessages from "../components/ChatPage/ChatMessages";
import ChatHeadline from "../components/ChatPage/ChatHeadline";

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
		<StyledChat>
			<StyledChatInner>
				<ChatHeadline />
				<StyledChatWindow>
					<ChatMessages chat={chat} username={username} />
					<ChatInput username={username} />
				</StyledChatWindow>
			</StyledChatInner>
		</StyledChat>
	);
};

const StyledChatWindow = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	height: 100%;
	margin: 4rem auto 0 auto;
`;

const StyledChat = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	height: 100vh;
	width: 100%;
`;

const StyledChatInner = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	background-color: var(--f-col);
	border-radius: 0.2rem;
`;

export default Chat;

import { useState, useEffect } from "react";
import Pusher from "pusher-js";

import { state } from "../globalState";
import ChatWindow from "../components/ChatInput";
import styled from "styled-components";
import { useSnapshot } from "valtio";

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

	console.log(username, "Ss");

	//TODO , skoncil jsem u porovnavani pokud ten user jsem ja a nebo ne
	return (
		<StyledChat>
			<StyledChatInner>
				<h1>Chat room</h1>
				<StyledChatWindow>
					{chat.map((c, i) => (
						<StyledChatMessageRow key={i}>
							{c.username ===
								username(
									<StyledChatMessage color={c.username === toString(username)}>
										message: {c.message}
									</StyledChatMessage>
								)}
						</StyledChatMessageRow>
						// <StyledChatMessageRow key={i}>
						// 	{c.username === username ? (
						// 		<StyledChatMessage color="#172261">
						// 			message: {c.message}
						// 		</StyledChatMessage>
						// 	) : (
						// 		<StyledChatMessage color="#969696">
						// 			message: {c.message}
						// 		</StyledChatMessage>
						// 	)}
						// </StyledChatMessageRow>
					))}
					<ChatWindow username={username} />
				</StyledChatWindow>
			</StyledChatInner>
		</StyledChat>
	);
};

const StyledChatMessageRow = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const StyledChatMessage = styled.p`
	padding: 0.5rem 1rem;
	border-radius: 2rem;
	background-color: ${({ color }) => (color ? "pink" : "wheat")};
`;

const StyledChatWindow = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid black;
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
	/* background: rgb(0, 4, 40);
	background: linear-gradient(
		90deg,
		rgba(0, 4, 40, 1) 0%,
		rgba(0, 78, 146, 1) 100%
	); */

	h1 {
		background-color: #fcfcfc;
		padding: 2rem;
	}
`;

const StyledChatInner = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	background-color: rgb(233, 233, 233);
	border-radius: 0.2rem;
`;

export default Chat;

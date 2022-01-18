import { useState, useEffect } from "react";
import styled from "styled-components";
import Div100vh from "react-div-100vh";

import { state } from "../libs/valtio";
import ChatInput from "../components/ChatPage/ChatInput";
import ChatMessages from "../components/ChatPage/ChatMessages";
import ChatHeadline from "../components/ChatPage/ChatHeadline";

const Chat = () => {
	console.warn("Chat, rerendered");
	const [chat, setChat] = useState([]);
	const { username, selectedAvatar } = state;

	return (
		<StyledChat>
			<StyledChatInner>
				<ChatHeadline />
				<StyledChatWindow>
					<ChatMessages chat={chat} username={username} />
				</StyledChatWindow>
				<ChatInput username={username} selectedAvatar={selectedAvatar} />
			</StyledChatInner>
		</StyledChat>
	);
};

const StyledChatWindow = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	/* height: 100%; */
	flex: 1;
	margin: 4rem auto;
	overflow-y: auto;
`;

const StyledChat = styled(Div100vh)`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
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

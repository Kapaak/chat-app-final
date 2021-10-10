import Avatar, { genConfig } from "react-nice-avatar";
import styled from "styled-components";
import { avatarConfigs } from "../../globalState/globalFunctions";

const ChatMessages = ({ chat, username }) => {
	const detectMyChat = us => username === us;
	return (
		<>
			{chat.map((c, i) => (
				<StyledChatMessageRow key={i} detectMyChat={detectMyChat(c.username)}>
					<StyledChatMessage detectMyChat={detectMyChat(c.username)}>
						{/* <p>{c.username}</p> */}
						<p>{c.message}</p>
					</StyledChatMessage>
					<StyledAvatar
						{...genConfig(avatarConfigs(c.selectedAvatar))}
						detectMyChat={detectMyChat(c.username)}
					/>
				</StyledChatMessageRow>
			))}
		</>
	);
};

const StyledAvatar = styled(Avatar)`
	position: absolute;
	width: 5rem;
	height: 5rem;
	left: ${({ detectMyChat }) => (detectMyChat ? "none" : "0px")};
	right: ${({ detectMyChat }) => (detectMyChat ? "0px" : "none")};
	transform: ${({ detectMyChat }) =>
		detectMyChat ? "translate(122%, -62%)" : "translate(-122%, -62%)"};
	top: 50%;
`;

const StyledChatMessageRow = styled.div`
	position: relative;
	display: flex;
	justify-content: ${({ detectMyChat }) =>
		detectMyChat ? "flex-end" : "flex-start"};
`;

const StyledChatMessage = styled.div`
	padding: 0.5rem 1rem;
	border-radius: 2rem;
	background-color: ${({ detectMyChat }) =>
		detectMyChat ? "var(--s-col)" : "var(--t-col)"};
	color: ${({ detectMyChat }) =>
		detectMyChat ? "var(--f-col)" : "var(--ff-col)"};
	margin-bottom: ${({ detectMyChat }) => (detectMyChat ? "0.5rem" : "1rem")};
`;

export default ChatMessages;

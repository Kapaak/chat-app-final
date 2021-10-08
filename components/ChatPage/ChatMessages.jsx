import styled from "styled-components";

const ChatMessages = ({ chat, username }) => {
	const detectMyChat = us => username === us;
	return (
		<>
			{chat.map((c, i) => (
				<StyledChatMessageRow key={i} detectMyChat={detectMyChat(c.username)}>
					<StyledChatMessage detectMyChat={detectMyChat(c.username)}>
						{c.message}
					</StyledChatMessage>
				</StyledChatMessageRow>
			))}
		</>
	);
};

const StyledChatMessageRow = styled.div`
	display: flex;
	justify-content: ${({ detectMyChat }) =>
		detectMyChat ? "flex-end" : "flex-start"};
`;

const StyledChatMessage = styled.p`
	padding: 0.5rem 1rem;
	border-radius: 2rem;
	background-color: ${({ detectMyChat }) =>
		detectMyChat ? "var(--s-col)" : "var(--t-col)"};
	color: ${({ detectMyChat }) =>
		detectMyChat ? "var(--f-col)" : "var(--ff-col)"};
	margin-bottom: ${({ detectMyChat }) => (detectMyChat ? "0.5rem" : "1rem")};
`;

export default ChatMessages;

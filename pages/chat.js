//libraries
import styled from "styled-components";
//components
import { Section } from "@/styles";
import ChatPage from "@/components/ChatPage";

const Chat = () => {
	return (
		<SChat>
			<ChatPage />
		</SChat>
	);
};

export default Chat;

const SChat = styled(Section)``;

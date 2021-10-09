import { useRouter } from "next/router";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import UserProfile from "./UserProfile";

const ChatHeadline = () => {
	const router = useRouter();
	return (
		<StyledChatHeadline>
			{/* tady tu funkci udelej v chatu a posli ji sem, at tam rovnou muzes disconnectnout chat */}
			<button onClick={() => router.back()}>
				<FontAwesomeIcon icon={faArrowLeft} />
			</button>
			<h1>Chat room</h1>
			<UserProfile />
		</StyledChatHeadline>
	);
};

const StyledChatHeadline = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 2rem;
	border-bottom: 1px solid #e0e0e0;

	button {
		border: none;
		background: transparent;
		cursor: pointer;

		svg {
			width: 2rem;
			font-size: 2rem;
		}
	}
`;

export default ChatHeadline;

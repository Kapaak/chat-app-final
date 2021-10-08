import { useRouter } from "next/router";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ChatHeadline = () => {
	const router = useRouter();
	return (
		<StyledChatHeadline>
			{/* tady tu funkci udelej v chatu a posli ji sem, at tam rovnou muzes disconnectnout chat */}
			<button onClick={() => router.back()}>
				<FontAwesomeIcon icon={faArrowLeft} />
			</button>
			<h1>Chat room</h1>
		</StyledChatHeadline>
	);
};

const StyledChatHeadline = styled.div`
	display: flex;
	gap: 1rem;
	padding: 2rem;
	border-bottom: 1px solid #e0e0e0;

	svg {
		width: 2rem;
	}

	button {
		border: none;
		background: transparent;
		cursor: pointer;
	}
`;

export default ChatHeadline;

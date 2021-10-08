import Login from "../components/Login";
import { state } from "../globalState";
import { useSnapshot } from "valtio";
import styled from "styled-components";

export default function Home() {
	console.warn("Home, rerendered");
	return (
		<StyledHome>
			<Login />
		</StyledHome>
	);
}

const StyledHome = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	width: 100%;
	background: rgb(0, 4, 40);
	background: linear-gradient(
		90deg,
		rgba(0, 4, 40, 1) 0%,
		rgba(0, 78, 146, 1) 100%
	);
`;

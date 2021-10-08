import Login from "../components/HomePage/Login";
import styled from "styled-components";

import HomeHeadline from "../components/HomePage/HomeHeadline";

export default function Home() {
	console.warn("Home, rerendered");

	return (
		<StyledHome>
			<div>
				<HomeHeadline />
				<Login />
			</div>
		</StyledHome>
	);
}

const StyledHome = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
	width: 100%;
	background-color: var(--f-col);

	& > div {
		width: 38rem;
	}
`;

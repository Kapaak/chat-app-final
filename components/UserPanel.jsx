import styled from "styled-components";
import { useSnapshot } from "valtio";

import { state } from "../globalState";

const UserPanel = () => {
	return <User>username: {useSnapshot(state).username}</User>;
};

const User = styled.div`
	position: absolute;
	top: 1rem;
	right: 2rem;
	background: #ffffffc8;
	padding: 1rem 1.5rem;
	border-radius: 0.35rem;
	cursor: pointer;
	z-index: 999;
	border: 1px solid black;
`;
export default UserPanel;

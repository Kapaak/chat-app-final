import Login from "../components/Login";
import { state } from "../globalState";
import { useSnapshot } from "valtio";

export default function Home() {
	console.warn("Home, rerendered");
	return (
		<div>
			<h1>username: {useSnapshot(state).username}</h1>
			<Login />
		</div>
	);
}

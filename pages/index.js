//libraries
import styled from "styled-components";
//components
import HomePage from "@/components/HomePage";
// import Navigation from "@/components/HomePage/Navigation";
// import Footer from "@/components/HomePage/Footer";
import { Section } from "@/styles";

//remove in future
import { useSnapshot } from "valtio";
import { state } from "../libs/valtio/index";

export default function Home() {
	console.warn("Home, rerendered");

	return (
		<SHome>
			{/* <Navigation /> */}
			<div>this is my state: {useSnapshot(state)?.username}</div>
			<HomePage />

			{/* <Footer /> */}
		</SHome>
	);
}

const SHome = styled(Section)``;

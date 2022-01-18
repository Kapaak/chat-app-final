//libraries
import styled from "styled-components";
//components
import HomePage from "@/components/HomePage";
import Navigation from "@/components/HomePage/Navigation";
import Footer from "@/components/HomePage/Footer";
import { Section } from "@/styles";

export default function Home() {
	console.warn("Home, rerendered");

	return (
		<SHome>
			<Navigation />

			<HomePage />

			<Footer />
		</SHome>
	);
}

const SHome = styled(Section)``;

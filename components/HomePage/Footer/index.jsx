//libraries
import styled from "styled-components";
//components
import { MaxWidth } from "@/styles";

const Footer = () => {
	return (
		<SFooter>
			<MaxWidth>
				<Container href="https://pavelzapletal.cz/">
					created by Pavel Zapletal
				</Container>
			</MaxWidth>
		</SFooter>
	);
};

const SFooter = styled.footer`
	position: absolute;
	bottom: 2rem;
	width: 100%;
`;

const Container = styled.a`
	text-decoration: none;
	color: var(--ff-col);
	padding: 1rem 0;
`;

export default Footer;

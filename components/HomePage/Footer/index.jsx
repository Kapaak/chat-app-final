//libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
//components
import { MaxWidth } from "@/styles";

const Footer = () => {
	return (
		<SFooter>
			<MaxWidth>
				<Container href="https://pavelzapletal.cz/">
					created with <FontAwesomeIcon icon={faHeart} /> by Pavel Zapletal
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
	color: var(--f-col);
	background-color: var(--ff-col);
	border-radius: 0.4rem;
	padding: 0.5rem 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;

	svg {
		width: 1.4rem;
		color: #f91919;
	}
`;

export default Footer;

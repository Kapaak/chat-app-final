//libraries
import styled from "styled-components";
//components
import { MainHeadline, MainSubHeadline } from "@/styles";

const HomeHeadline = () => {
	return (
		<StyledHomeHeadline>
			<MainHeadline>Welcome to Secret_chat</MainHeadline>
			<MainSubHeadline>Sign in and chat all day !</MainSubHeadline>
		</StyledHomeHeadline>
	);
};

const StyledHomeHeadline = styled.div``;

export default HomeHeadline;

import styled from "styled-components";

const HomeHeadline = () => {
	return (
		<StyledHomeHeadline>
			<h1>Welcome</h1>
			<h2>sign in & choose avatar to continue</h2>
		</StyledHomeHeadline>
	);
};

const StyledHomeHeadline = styled.div`
	h1 {
		font-size: 4.5rem;
		font-weight: 700;
		line-height: 1.4;
	}

	h2 {
		color: var(--fff-col);
		font-weight: 300;
		font-size: 1.8rem;
	}
`;

export default HomeHeadline;

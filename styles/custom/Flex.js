import styled from "styled-components";

export const Flex = styled.div`
	position: relative;
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : "flex-start")};
	align-items: ${({ align }) => (align ? align : "stretch")};
	height: 100%;
	width: 100%;
`;

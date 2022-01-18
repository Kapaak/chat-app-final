import styled from "styled-components";

export const Modal = styled.div`
	display: ${({ shouldOpen }) => (shouldOpen ? "block" : "none")};
	position: absolute;
	top: 50%;
	left: 50%;
	background-color: var(--f-col);
	transform: translate(-50%, -50%);
	box-shadow: var(--shadow);
	padding: 2rem 2rem;
	border-radius: 1rem;
	width: 100%;

	& > button {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 0.5rem;
		padding-left: 0;
		gap: 0.8rem;
	}

	svg {
		width: 1.5rem;
	}

	.hr {
		width: 100%;
		height: 0.15rem;
		background-color: var(--light-gray);
		margin-bottom: 1rem;
	}

	.underline {
		display: flex;
		gap: 0.5rem;
		font-size: var(--small-text);
		line-height: 1.4;

		p:last-of-type {
			cursor: pointer;
			color: var(--s-col);
		}
	}
`;

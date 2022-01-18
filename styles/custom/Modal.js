import styled from "styled-components";

import { Button } from ".";

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

	.close{
		position:absolute;
		right:1.5rem;
		top:1.5rem;
		display:flex;
		flex-direction:column;
		justify-content:center;
		height:1rem;

		p{
			width:2rem;
			height:.2rem;
			background-color:var(--ff-col);
			
			&:first-child{
				transform:translateY(.2rem) rotate(45deg);
			}
			
			&:last-child{
				transform:rotate(-45deg);
			}
		}
	}

	h1 {
		font-size: var(--main-headline);
	}

	h2 {
		font-size: var(--main-subheadline);
		color: var(--fff-col);
		font-weight: 500;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-top: 3rem;
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

	label {
		font-size: var(--small-text);
		font-weight: 500;
	}

	input {
		border: 1px solid var(--ss-col);
		height: 3rem;
		border-radius: 0.5rem;
		padding: 0.4rem 0.5rem;
	}

	${Button} {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 4rem;
		padding-left: 0;
		margin-top: 0.5rem;

		svg {
			margin-right: 0.8rem;
		}
	}
`;

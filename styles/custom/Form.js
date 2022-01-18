//libraries
import styled from "styled-components";
//components
import { Button } from ".";

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-top: 3rem;

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
		height: 4rem;
		padding-left: 0;
		margin-top: 0.5rem;
	}
`;

//libraries
import styled from "styled-components";

export const CloseButton = ({ ...rest }) => {
	return (
		<SCloseButton {...rest}>
			<p></p>
			<p></p>
		</SCloseButton>
	);
};

const SCloseButton = styled.div`
	position: absolute;
	right: 1.5rem;
	top: 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 1rem;
	cursor: pointer;

	p {
		width: 2rem;
		height: 0.2rem;
		background-color: var(--ff-col);

		&:first-child {
			transform: translateY(0.2rem) rotate(45deg);
		}

		&:last-child {
			transform: rotate(-45deg);
		}
	}
`;

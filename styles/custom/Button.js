import styled from "styled-components";

export const Button = styled.button`
	background: ${({ variant }) =>
		variant === "borderless"
			? "transparent"
			: variant === "submit"
			? "var(--s-col)"
			: "var(--ff-col)"};
	color: ${({ variant }) =>
		variant === "borderless" ? "var(--ff-col)" : "var(--f-col)"};
	font-weight: ${({ variant }) => (variant === "submit" ? "700" : 500)};
	border: none;
	border-radius: 0.4rem;
	padding: 0.6rem 1rem;

	cursor: pointer;
`;

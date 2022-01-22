//libraries
import styled from "styled-components";
import { useRouter } from "next/router";
//components
import { Button, Flex, Logo, MaxWidth } from "@/styles";
import Profile from "./Profile";
import { useSnapshot } from "valtio";
import { state } from "../../../libs/valtio";

const Navigation = () => {
	const router = useRouter();
	const globalState = useSnapshot(state);
	console.log(globalState);
	//je mozny, ze bych mohl udelat navigation pro vsechny a podle route bych zjistoval kde jsem a podle toho zobrazoval
	return (
		<Nav>
			<MaxWidth>
				<Flex justify="space-between" align="center">
					<Logo onClick={() => router.push("/")}>Secret_chat</Logo>
					<SignMethods>
						<Button
							variant="borderless"
							onClick={() => router.push("?action=sign-in")}
						>
							sign in
						</Button>
						<Button onClick={() => router.push("?action=sign-up")}>
							sign up
						</Button>
					</SignMethods>
					<p>{globalState.username}</p>
					<Profile />
				</Flex>
			</MaxWidth>
		</Nav>
	);
};

const Nav = styled.nav`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	padding: 2rem 0;
	z-index: 9;
`;

const SignMethods = styled.div`
	display: flex;
`;

export default Navigation;

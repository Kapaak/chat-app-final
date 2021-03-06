//libraries
import Div100 from "react-div-100vh";

//components
import { Flex, MaxWidth } from "@/styles";
import { ResetPasswordModal, SignInModal, SignUpModal } from "../Modals";
import HomeHeadline from "./HomeHeadline";

const HomePage = () => {
	return (
		<Div100>
			<MaxWidth>
				<Flex align="center">
					<SignInModal />
					<SignUpModal />
					<ResetPasswordModal />
					<HomeHeadline />
				</Flex>
			</MaxWidth>
		</Div100>
	);
};

export default HomePage;

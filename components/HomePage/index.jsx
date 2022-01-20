//libraries
import Div100 from "react-div-100vh";

//components
import { Flex, MaxWidth } from "@/styles";
import { SignInModal } from "../Modals";
import HomeHeadline from "./HomeHeadline";
import SignUpModal from "../Modals/SignUpModal";

const HomePage = () => {
	return (
		<Div100>
			<MaxWidth>
				<Flex align="center">
					<SignInModal />
					<SignUpModal />
					<HomeHeadline />
				</Flex>
			</MaxWidth>
		</Div100>
	);
};

export default HomePage;

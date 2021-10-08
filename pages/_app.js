import { GlobalStyles } from "../styles/GlobalStyles";
import UserPanel from "../components/UserPanel";
import HeadSelector from "../components/Head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<HeadSelector />
			<GlobalStyles />
			<UserPanel />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;

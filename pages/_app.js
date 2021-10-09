import { GlobalStyles } from "../styles/GlobalStyles";
import HeadSelector from "../components/Head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<HeadSelector />
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;

import { GlobalStyles } from "../styles/GlobalStyles";
import HeadSelector from "../components/Head";
import Navigation from "@/components/HomePage/Navigation";
import Footer from "@/components/HomePage/Footer";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<HeadSelector />
			<GlobalStyles />
			<Navigation />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;

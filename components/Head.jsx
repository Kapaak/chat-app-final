import Head from "next/head";

const HeadSelector = () => {
	return (
		<Head>
			<title>Chat app</title>
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Raleway:wght@400;500&display=swap"
				rel="stylesheet"
			/>
		</Head>
	);
};

export default HeadSelector;

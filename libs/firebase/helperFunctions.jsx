import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
} from "firebase/auth";
import { auth } from ".";

export const onPasswordReset = (email, router) => {
	sendPasswordResetEmail(auth, email)
		.then(() => {
			router.push("/");
		})
		.catch(error => {
			const errorMessage = error.message;
			console.log(errorMessage);
		});
};

export const onGmailSubmit = () => {
	const provider = new GoogleAuthProvider();
	signInWithPopup(auth, provider)
		.then(e => {
			router.push("/");
			const credential = GoogleAuthProvider.credentialFromResult(e);
			console.log(e, credential);
		})
		.catch(e => {
			console.log(e.message);
		});
};

export const onEmailPasswordSubmit = (data, setErrMessage, router) => {
	console.log(data, "data");
	signInWithEmailAndPassword(auth, data.username, data.password)
		.then(e => {
			setErrMessage("");
			router.push("/");
		})
		.catch(e => {
			setErrMessage("invalid username or password");
		});
};

export const onCreateUserWithEmailAndPassword = (
	data,
	setErrMessage,
	router
) => {
	createUserWithEmailAndPassword(auth, data.email, data.password)
		.then(e => {
			router.push("/");
			setErrMessage("");
		})
		.catch(e => {
			setErrMessage("email is already registered");
		});
};

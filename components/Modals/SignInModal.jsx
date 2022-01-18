//libraries
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";
import {
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";
//components
import {
	Modal,
	Button,
	CloseButton,
	MainHeadline,
	MainSubHeadline,
	Form,
	ErrorMessage,
} from "@/styles";
//others
import { auth } from "../../libs/firebase";

export const SignInModal = () => {
	const [open, setOpen] = useState(false);
	const [errMessage, setErrMessage] = useState("");
	const router = useRouter();
	const provider = new GoogleAuthProvider();

	useEffect(() => {
		if (router.query.action === "sign-in") setOpen(true);
		else setOpen(false);
	}, [router.query]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = data => {
		signInWithEmailAndPassword(auth, data.username, data.password)
			.then(e => {
				setErrMessage("");
				router.push("/");
			})
			.catch(e => {
				setErrMessage("invalid username or password");
			});
	};

	const onSubmitGmail = () => {
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

	return (
		<Modal shouldOpen={open}>
			<CloseButton onClick={() => router.push("/")} />
			<MainHeadline>Hello !</MainHeadline>
			<MainSubHeadline>Sign into your account</MainSubHeadline>

			<Form onSubmit={handleSubmit(onSubmit)}>
				<label>username</label>
				<input type="text" {...register("username", { required: true })} />
				<label htmlFor="">password</label>
				<input type="password" {...register("password", { required: true })} />
				<ErrorMessage>{errMessage.length > 0 && errMessage}</ErrorMessage>
				{/* {errors.password && <span>This field is required</span>} */}
				<Button type="submit" variant="submit">
					Sign in
				</Button>
			</Form>

			<Button variant="borderless" onClick={() => onSubmitGmail()}>
				<FontAwesomeIcon icon={faGoogle} /> Sign up with Google account
			</Button>

			<div className="hr"></div>
			<div className="underline">
				<p>Forgot password?</p>
				<p>Reset</p>
			</div>
			<div className="underline">
				<p>Don't have an account?</p>
				<p onClick={() => router.push("/?action=sign-up")}>Sign up</p>
			</div>
		</Modal>
	);
};

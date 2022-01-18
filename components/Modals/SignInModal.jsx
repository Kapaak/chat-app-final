//libraries
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
//components
import { Modal, Button } from "@/styles";
//others
import { auth } from "../../libs/firebase";

export const SignInModal = () => {
	const [open, setOpen] = useState(false);
	const router = useRouter();

	useEffect(() => {
		if (router.query.action === "sign-in") setOpen(true);
		else setOpen(false);
		console.log(router.query);
	}, [router.query]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = data => {
		console.log(data, "data");
		signInWithEmailAndPassword(auth, data.username, data.password)
			.then(e => console.log(e))
			.catch(e => {
				console.log(e);
			});
		router.push("/");
	};
	return (
		<Modal shouldOpen={open}>
			<div className="close" onClick={() => router.push("/")}>
				<p></p>
				<p></p>
			</div>
			<h1>Hello !</h1>
			<h2>Sign into your account</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>username</label>
				<input type="text" {...register("username", { required: true })} />
				<label htmlFor="">password</label>
				<input type="password" {...register("password", { required: true })} />
				{/* {errors.password && <span>This field is required</span>} */}

				<Button type="submit" variant="submit">
					Sign in
				</Button>
			</form>
			<Button variant="borderless">
				<FontAwesomeIcon icon={faGoogle} /> Sign up with Google account
			</Button>

			<div className="hr"></div>
			<div className="underline">
				<p>Forgot password?</p>
				<p>Reset</p>
			</div>
			<div className="underline">
				<p>Don't have an account?</p>
				<p>Sign up</p>
			</div>
		</Modal>
	);
};

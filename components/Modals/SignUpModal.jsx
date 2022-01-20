//libraries
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
//components
import {
	Button,
	CloseButton,
	ErrorMessage,
	Form,
	MainHeadline,
	MainSubHeadline,
	Modal,
} from "@/styles";
//others
import { onCreateUserWithEmailAndPassword } from "libs/firebase/helperFunctions";

export const SignUpModal = () => {
	const [open, setOpen] = useState(false);
	const [errMessage, setErrMessage] = useState("");
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		if (router.query.action === "sign-up") setOpen(true);
		else setOpen(false);
	}, [router.query]);

	const onSubmit = data => {
		onCreateUserWithEmailAndPassword(data, setErrMessage, router);
	};

	return (
		<Modal shouldOpen={open}>
			<CloseButton onClick={() => router.push("/")} />
			<MainHeadline>Join Secret_chat</MainHeadline>
			<MainSubHeadline>Sign up to chat with people</MainSubHeadline>

			<Form onSubmit={handleSubmit(onSubmit)}>
				<label>username</label>
				<input type="text" {...register("username", { required: true })} />
				<label>email</label>
				<input type="email" {...register("email", { required: true })} />
				<label>password</label>
				<input type="password" {...register("password", { required: true })} />
				<ErrorMessage>{errMessage.length > 0 && errMessage}</ErrorMessage>
				<Button type="submit" variant="submit">
					Create your free account
				</Button>

				<div className="hr"></div>

				<div className="underline">
					<p>Already registered?</p>
					<p onClick={() => router.push("/?action=sign-in")}>Sign in</p>
				</div>
			</Form>
		</Modal>
	);
};

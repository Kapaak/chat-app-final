import {
	Button,
	CloseButton,
	Form,
	MainHeadline,
	MainSubHeadline,
	Modal,
} from "@/styles";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const SignUpModal = () => {
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
		console.log(data, "data from register signup");
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

				<Button type="submit" variant="submit">
					Create your free account
				</Button>
			</Form>
		</Modal>
	);
};

export default SignUpModal;

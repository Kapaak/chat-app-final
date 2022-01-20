//libraries
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
//components
import {
	CloseButton,
	Form,
	MainHeadline,
	MainSubHeadline,
	Modal,
	Button,
} from "@/styles";
//others
import { onPasswordReset } from "libs/firebase/helperFunctions";

export const ResetPasswordModal = () => {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		if (router.query.action === "reset-password") setOpen(true);
		else setOpen(false);
	}, [router.query]);

	const onSubmit = data => {
		onPasswordReset(data.email, router);
	};

	return (
		<Modal shouldOpen={open}>
			<CloseButton onClick={() => router.push("/")} />
			<MainHeadline>Reset Password</MainHeadline>
			<MainSubHeadline>Enter your email address</MainSubHeadline>

			<Form onSubmit={handleSubmit(onSubmit)}>
				<label>email</label>
				<input type="text" {...register("email", { required: true })} />
				<Button type="submit" variant="submit">
					Confirm password reset
				</Button>
			</Form>
		</Modal>
	);
};

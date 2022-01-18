import { proxy } from "valtio";

export const state = proxy({
	username: "unknown",
	selectedAvatar: -1,
	signInModal: false,
	signUpModal: false,
});

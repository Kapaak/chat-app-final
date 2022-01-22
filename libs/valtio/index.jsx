import { proxy } from "valtio";

export const state = proxy({
	username: "",
	selectedAvatar: -1,
});

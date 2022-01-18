import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

let app;

const firebaseConfig = {
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGING_SENDER_ID,
	appId: process.env.APP_ID,
	measurementId: process.env.MEASUREMENT_ID,
};
// const app = initializeApp(firebaseConfig);
if (getApps().length) {
	app = getApp();
} else {
	app = initializeApp(firebaseConfig);
}

export const auth = getAuth(app);

// const analytics = getAnalytics(app);

import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useAppDispatch } from "hooks/reduxHook/reduxHook";
import { dataUserAdd } from "components/Register/slice/dataUserSlice";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const login = useGoogleLogin({
		onSuccess: async (credentialResponse) => {
			const code = credentialResponse.code;
			const name = `google${Math.floor(Math.random() * 10000)}`;
			dispatch(
				dataUserAdd({
					userName: name,
					password: "",
					token: code,
				})
			);
			localStorage.setItem("token", code);
			localStorage.setItem("userName", name);
			navigate("/");
		},
		onError: () => {
			console.log("Login Failed");
		},
		flow: "auth-code",
	});

	return (
		<>
			<button
				type="button"
				className="flex flex-1 flex-wrap w-full m-5 pr-2 box-border border border-[rgb(0 0 0 / 26%) px-1 h-10 text-sm justify-center items-center] rounded-sm cursor-pointer"
				onClick={() => login()}
			>
				<div className="w-[36px] h-[36px] flex justify-center items-center">
					<div className="w-[22px] h-[22px] shrink-0 mr-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 488 512"
							fill="blue"
						>
							<path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
						</svg>
					</div>
					<div>Google</div>
				</div>
			</button>
		</>
	);
};

export default GoogleLoginButton;

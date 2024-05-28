import React from "react";
import { Link } from "react-router-dom";

const HelpHeaderHomePage = () => {
	return (
		<Link to="/" className="py-[6px] flex justify-center items-center">
			<div className="w-[14px] h-[18px] flex justify-center items-center mr-1">
				<svg height="16" viewBox="0 0 16 16" width="16">
					<g fill="none" fillRule="evenodd" transform="translate(1)">
						<circle cx="7" cy="8" r="7" stroke="currentColor"></circle>
						<path
							fill="currentColor"
							d="m6.871 3.992c-.814 0-1.452.231-1.914.704-.462.462-.693 1.089-.693 1.892h1.155c0-.484.099-.858.297-1.122.22-.319.583-.473 1.078-.473.396 0 .715.11.935.33.209.22.319.517.319.902 0 .286-.11.55-.308.803l-.187.209c-.682.605-1.1 1.056-1.243 1.364-.154.286-.22.638-.22 1.045v.187h1.177v-.187c0-.264.055-.506.176-.726.099-.198.253-.396.462-.572.517-.451.825-.737.924-.858.275-.352.418-.803.418-1.342 0-.66-.22-1.188-.66-1.573-.44-.396-1.012-.583-1.716-.583zm-.198 6.435c-.22 0-.418.066-.572.22-.154.143-.231.33-.231.561 0 .22.077.407.231.561s.352.231.572.231.418-.077.572-.22c.154-.154.242-.341.242-.572s-.077-.418-.231-.561c-.154-.154-.352-.22-.583-.22z"
						></path>
					</g>
				</svg>
			</div>
			<span>Hỗ Trợ</span>
		</Link>
	);
};

export default HelpHeaderHomePage;

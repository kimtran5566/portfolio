import React from "react";

const SearchHeaderHomePage = () => {
	return (
		<div className="flex flex-col space-y-2">
			<div className="h-10 w-[840px] py-1 pl-1 pr-[2px] flex bg-white items-center border rounded-sm ">
				<input
					type="text"
					placeholder="Tìm kiếm..."
					className="text-black grow outline-none  px-4 py-2"
				/>
				<button className="text-white flex justify-center items-center bg-[#fb5533] h-[34px] px-[15px] min-w-[60px] border hover:bg-orange-300 rounded-sm ">
					<div className="w-[14px] h-[14px] flex justify-center items-center">
						<svg height="19" viewBox="0 0 19 19" width="19" fill="white">
							<g fillRule="evenodd" stroke="white" strokeWidth="1">
								<g transform="translate(-1016 -32)">
									<g>
										<g transform="translate(405 21)">
											<g transform="translate(611 11)">
												<path d="m8 16c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8zm0-2c-3.3137085 0-6-2.6862915-6-6s2.6862915-6 6-6 6 2.6862915 6 6-2.6862915 6-6 6z"></path>
												<path d="m12.2972351 13.7114222 4.9799555 4.919354c.3929077.3881263 1.0260608.3842503 1.4141871-.0086574.3881263-.3929076.3842503-1.0260607-.0086574-1.414187l-4.9799554-4.919354c-.3929077-.3881263-1.0260608-.3842503-1.4141871.0086573-.3881263.3929077-.3842503 1.0260608.0086573 1.4141871z"></path>
											</g>
										</g>
									</g>
								</g>
							</g>
						</svg>
					</div>
				</button>
			</div>
			<ul className="text-xs  font-light h-1.5 flex-1 flex space-x-3 justify-evenly items-center">
				<li>Iphone</li>
				<li>Iphone</li>
				<li>Iphone</li>
				<li>Iphone</li>
				<li>Iphone</li>
				<li>Iphone</li>
				<li>Iphone</li>
				<li>Iphone</li>
				<li>Iphone</li>
				<li>Iphone</li>
			</ul>
		</div>
	);
};

export default SearchHeaderHomePage;

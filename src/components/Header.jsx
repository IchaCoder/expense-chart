import React from "react";

const Header = () => {
	return (
		<div className="flex p-6 bg-primary justify-between rounded-xl">
			<div className="text-white">
				<h1 className="text-lg">My balance</h1>
				<h2 className="text-3xl pt-2 font-semibold">$921.68</h2>
			</div>
			<div className="flex">
				<img src="/logo.svg" alt="" />
			</div>
		</div>
	);
};

export default Header;

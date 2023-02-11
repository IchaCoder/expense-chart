import React from "react";

const Footer = () => {
	return (
		<div className="mt-6 flex justify-between">
			<div>
				<h2 className="text-[rgba(0,0,0,.4)]">Total this month</h2>
				<h2 className="text-3xl pt-2 font-semibold">$921.68</h2>
			</div>
			<div className="self-end">
				<div className="font-bold">+2.4%</div>
				<h2 className="text-[rgba(0,0,0,.4)]">From last month</h2>
			</div>
		</div>
	);
};

export default Footer;

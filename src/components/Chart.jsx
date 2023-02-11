import React, { useEffect, useState } from "react";
import data from "../data.json";
import Footer from "./Footer";

const Chart = () => {
	const [totalAmount, setTotalAmount] = useState();
	const [largestAmount, setLargestAmount] = useState();

	const calculateHeight = () => {
		let total = 0;
		let largestAmount = 0;
		for (let index = 0; index < data.length; index++) {
			total += data[index].amount;
			if (data[index].amount > largestAmount) {
				largestAmount = data[index].amount;
			}
		}
		console.log(largestAmount);
		setTotalAmount(total);
		setLargestAmount(largestAmount);
	};

	useEffect(() => {
		calculateHeight();
	});
	return (
		<div className="bg-white mt-4 p-6 rounded-lg">
			<h1 className="text-2xl font-bold">Spending - Last 7 days</h1>
			<div className="h-40 items-end flex gap-3 pb-8">
				{data.map(({ amount, day }, index) => {
					let heightPercentage = (amount / totalAmount) * 100;
					// Coverting height from percentage to pixel multiplying by 200px
					let newHeightInPixel = (heightPercentage / 100) * 200;
					const heightInPixel = Math.round(newHeightInPixel) + 10;
					return (
						<div key={index}>
							<div
								className="w-8 rounded-md cursor-pointer hover:opacity-70 transition-opacity duration-150 ease-linear"
								style={{
									height: `${heightInPixel}px`,
									background:
										largestAmount === amount
											? "hsl(186, 34%, 60%)"
											: "hsl(10, 79%, 65%)",
								}}
								title={"$" + amount}
							></div>
							<p className="text-xs text-center mt-4 text-[rgba(0,0,0,.4)]">
								{day}
							</p>
						</div>
					);
				})}
			</div>
			<hr />
			<Footer />
		</div>
	);
};

export default Chart;

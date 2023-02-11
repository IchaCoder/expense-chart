import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Chart from "./components/Chart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./output.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="max-w-[90%] md:max-w-[50%] lg:max-w-[30%] mx-auto mt-20">
			<Header />
			<Chart />
		</div>
	);
}

export default App;

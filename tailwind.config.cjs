/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			colors: {
				primary: "hsl(10, 79%, 65%)",
				cyan: "hsl(186, 34%, 60%)",
				"d-brown": "hsl(25, 47%, 15%)",
				cream: "hsl(27, 66%, 92%)",
				"p-orange": "hsl(33, 100%, 98%)",
			},
		},
	},
	plugins: [],
};

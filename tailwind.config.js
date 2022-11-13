module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			colors: {
				plumeria: {
					100: "#fff8cc",
					200: "#fff199",
					300: "#ffe966",
					400: "#ffe233",
					500: "#ffdb00",
					600: "#ccaf00",
					700: "#998300",
					800: "#665800",
					900: "#332c00",
				},
			},
			dropShadow: {
				toggleShadow:
					"0px 0.0962328px 0.288698px rgba(0, 0, 0, 0.1), 0px 0.962328px 1.92466px rgba(0, 0, 0, 0.2)",
			},
			fontSize: {
				sm: "0.8331249952316284rem",
				base: "1rem",
				lg: "1.2000000476837158rem",
				xl: "1.728124976158142rem",
				"2xl": "2.0737500190734863rem",
				"3xl": "2.4881250858306885rem",
				"4xl": "2.9862499237060547rem",
				"5xl": "3.583125114440918rem",
				"6xl": "4.300000190734863rem",
			},
		},
	},
	plugins: [],
};

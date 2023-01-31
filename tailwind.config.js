module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1500px',
			},
			colors: {
				tangerine: '#F08804',
				apricot: '#FEBD69',
				'yellow-orange': '#FEAF48',
				gainsboro: '#DDDDDD',
				cultured: '#EAEDED',
				gunmetal: '#232F3E',
				charcoal: '#3A4553',
				'rich-black-29': '#131921',
				'rich-black-39': '#0F1111',
			},
			fontFamily: {
				body: ['"Poppins", sans-serif'],
				// poppins: ['"Poppins", sans-serif'],
				// montserrat: ['"Montserrat", sans-serif'],
				// quicksand: ['"Quicksand", sans-serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
}

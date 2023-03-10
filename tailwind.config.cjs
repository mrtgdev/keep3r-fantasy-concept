
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  enabled: process.env.NODE_ENV === 'production',
	safeList: [],
	darkMode: 'class',
	theme: {
		height: {
			card: '24rem',
			data: '11rem'
		},
		fontFamily: {
			neueBitPro: ['Neue Bit Pro', 'sans-serif'],
			termina: ['Termina Heavy', 'sans-serif'],
			terminaBold: ['Termina Bold', 'sans-serif'],
		},
		animation: {
			blob: "blob 7s infinite",
		},
		keyframes: {
			blob: {
			  "0%": {
				transform: "translate(0px, 0px) scale(1)",
			  },
			  "33%": {
				transform: "translate(30px, -50px) scale(1.1)",
			  },
			  "66%": {
				transform: "translate(-20px, 20px) scale(0.9)",
			  },
			  "100%": {
				transform: "translate(0px, 0px) scale(1)",
			  },
			},
		},
		extend: {
			colors: {
				'primary':'#00E592',
				'mindaro': '#CDFF78',
				'cultured': '#f0eee8',
				'bigstone': '#080808',		
			}
		},
	},
	plugins: [],
}

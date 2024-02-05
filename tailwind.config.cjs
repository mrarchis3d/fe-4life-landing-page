/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				custom:["Roboto", "sans-serif"]
			}
		},
		fontSize: {
			xs: '0.8rem',
			sm: '1rem',
			base: '1.25rem',
			md: '1.25rem',
			lg: '1.65rem',
			xl: '2rem',
			'2xl': '2.5rem',
			'3xl': '3rem',
			'4xl': '3.5rem',
			'5xl': '3.9rem',
		  }
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/line-clamp"),
		require('@tailwindcss/aspect-ratio'),
	],
}

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
			xs: '0.6rem',
			sm: '0.8rem',
			base: '1rem',
			md: '1.25rem',
			lg: '1.5rem',
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

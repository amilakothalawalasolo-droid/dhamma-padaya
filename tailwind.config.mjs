/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// අපේ අලුත් චොකලට් පාට (Chocolate Palette)
				chocolate: {
					50: '#f7f3f2',
					100: '#efe6e4',
					200: '#dcd0cd',
					300: '#bfaba6',
					400: '#9d7f78',
					500: '#845f57',
					600: '#6d4a43', // Main Color
					700: '#5a3b36',
					800: '#4b322f',
					900: '#3f2b29',
					950: '#231615',
				}
			},
            fontFamily: {
                sinhala: ['"Noto Sans Sinhala"', 'sans-serif'],
            }
		},
	},
	plugins: [],
}

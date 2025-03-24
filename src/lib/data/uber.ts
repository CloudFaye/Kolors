import type { ColorSystem } from '$lib/types/colorSystem';
export const uber: ColorSystem = {
	id: 'uber',
	name: 'Uber Design',
	description: "Uber's design system for building consistent experiences",
	url: '',
	image: './images/Ubers Base.png',
	colorGroups: [
		{
			name: 'Primary',
			shades: [
				{ name: '50', value: '#EDF0F9' },
				{ name: '100', value: '#D8E0F0' },
				{ name: '200', value: '#B9C5E1' },
				{ name: '300', value: '#98A9D2' },
				{ name: '400', value: '#778DC4' },
				{ name: '500', value: '#5871B5' },
				{ name: '600', value: '#3E5496' },
				{ name: '700', value: '#2B3C6B' },
				{ name: '800', value: '#1A2541' },
				{ name: '900', value: '#0B101C' }
			]
		},
		{
			name: 'Monochrome',
			shades: [
				{ name: 'White', value: '#FFFFFF' },
				{ name: '100', value: '#F7F7F7' },
				{ name: '200', value: '#F0F0F0' },
				{ name: '300', value: '#E2E2E2' },
				{ name: '400', value: '#CBCBCB' },
				{ name: '500', value: '#ADADAD' },
				{ name: '600', value: '#757575' },
				{ name: '700', value: '#545454' },
				{ name: '800', value: '#333333' },
				{ name: '900', value: '#000000' }
			]
		},
		{
			name: 'Accent',
			shades: [
				{ name: 'Green', value: '#06C167' },
				{ name: 'Red', value: '#E31B0C' },
				{ name: 'Yellow', value: '#FFC043' },
				{ name: 'Orange', value: '#FF6937' }
			]
		}
	]
};

export default uber;

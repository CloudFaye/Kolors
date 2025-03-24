import type { ColorSystem } from '$lib/types/colorSystem';
export const ibm: ColorSystem = {
	id: 'ibm-carbon',
	name: 'IBM Carbon',
	description: "IBM's open-source color palettes for products and digital experiences",
	url: '',
	image: './images/IBM carbon.png',
	colorGroups: [
		{
			name: 'Blue',
			description: 'Primary brand color',
			shades: [
				{ name: '10', value: '#edf5ff' },
				{ name: '20', value: '#d0e2ff' },
				{ name: '30', value: '#a6c8ff' },
				{ name: '40', value: '#78a9ff' },
				{ name: '50', value: '#4589ff' },
				{ name: '60', value: '#0f62fe' },
				{ name: '70', value: '#0043ce' },
				{ name: '80', value: '#002d9c' },
				{ name: '90', value: '#001d6c' },
				{ name: '100', value: '#001141' }
			]
		},
		{
			name: 'Gray',
			description: 'Neutral colors',
			shades: [
				{ name: '10', value: '#f4f4f4' },
				{ name: '20', value: '#e0e0e0' },
				{ name: '30', value: '#c6c6c6' },
				{ name: '40', value: '#a8a8a8' },
				{ name: '50', value: '#8d8d8d' },
				{ name: '60', value: '#6f6f6f' },
				{ name: '70', value: '#525252' },
				{ name: '80', value: '#393939' },
				{ name: '90', value: '#262626' },
				{ name: '100', value: '#161616' }
			]
		},
		{
			name: 'Green palette',
			description: 'IBM Green colors',
			shades: [
				{ name: '10', value: '#defbe6' },
				{ name: '20', value: '#A7F0BA' },
				{ name: '30', value: '#6fdc8c' },
				{ name: '40', value: '#42be65' },
				{ name: '50', value: '#24a148' },
				{ name: '60', value: '#198038' },
				{ name: '70', value: '#0e6027' },
				{ name: '80', value: '#044317' },
				{ name: '90', value: '#022b0d' },
				{ name: '100', value: '#071908' }
			]
		}
	]
};

export default ibm;

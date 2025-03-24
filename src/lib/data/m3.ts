import type { ColorSystem } from '$lib/types/colorSystem';
export const m3: ColorSystem = {
	id: 'material-3',
	name: 'M3 Color System',
	description: "Google's open-source design system",
	url: '',
	image: './images/material.png',
	colorGroups: [
		{
			name: 'Primary',
			shades: [
				{ name: '0', value: '#000000' },
				{ name: '10', value: '#21005d' },
				{ name: '20', value: '#381e72' },
				{ name: '30', value: '#4f378b' },
				{ name: '40', value: '#6750a4' },
				{ name: '50', value: '#7f67be' },
				{ name: '60', value: '#9a82db' },
				{ name: '70', value: '#b69df8' },
				{ name: '80', value: '#d0bcff' },
				{ name: '90', value: '#eaddff' },
				{ name: '95', value: '#f6edff' },
				{ name: '99', value: '#fffbfe' },
				{ name: '100', value: '#ffffff' }
			]
		},
		{
			name: 'Secondary',
			shades: [
				{ name: '0', value: '#000000' },
				{ name: '10', value: '#1d192b' },
				{ name: '20', value: '#332d41' },
				{ name: '30', value: '#4a4458' },
				{ name: '40', value: '#625b71' },
				{ name: '50', value: '#7a7289' },
				{ name: '60', value: '#958da5' },
				{ name: '70', value: '#b0a7c0' },
				{ name: '80', value: '#ccc2dc' },
				{ name: '90', value: '#e8def8' },
				{ name: '95', value: '#f6edff' },
				{ name: '99', value: '#fffbfe' },
				{ name: '100', value: '#ffffff' }
			]
		}
	]
};

export default m3;

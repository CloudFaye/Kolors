import type { ColorSystem } from '$lib/types/colorSystem';
export const dell: ColorSystem = {
	id: 'dell',
	name: 'Dell Design System',
	description: "Dell's design system for creating consistent digital experiences",
	url: '',
	image: './images/dell.svg',
	colorGroups: [
		{
			name: 'Brand',
			shades: [
				{ name: 'Blue', value: '#007DB8' },
				{ name: 'Dark Blue', value: '#00447C' },
				{ name: 'Light Blue', value: '#64CDF4' },
				{ name: 'Black', value: '#191919' },
				{ name: 'White', value: '#FFFFFF' }
			]
		},
		{
			name: 'UI',
			shades: [
				{ name: 'Primary', value: '#0076CE' },
				{ name: 'Secondary', value: '#6E6E6E' },
				{ name: 'Success', value: '#378D3B' },
				{ name: 'Warning', value: '#E59700' },
				{ name: 'Error', value: '#D53E4F' },
				{ name: 'Info', value: '#449ECA' }
			]
		},
		{
			name: 'Grays',
			shades: [
				{ name: '50', value: '#FAFAFA' },
				{ name: '100', value: '#F2F2F2' },
				{ name: '200', value: '#E6E6E6' },
				{ name: '300', value: '#CCCCCC' },
				{ name: '400', value: '#B3B3B3' },
				{ name: '500', value: '#999999' },
				{ name: '600', value: '#6E6E6E' },
				{ name: '700', value: '#4D4D4D' },
				{ name: '800', value: '#333333' },
				{ name: '900', value: '#191919' }
			]
		}
	]
};

export default dell;

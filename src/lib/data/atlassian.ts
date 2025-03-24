import type { ColorSystem } from '$lib/types/colorSystem';
export const atlassian: ColorSystem = {
	id: 'atlassian',
	name: 'Atlassian Color System',
	description: "The official color palette from Atlassian's design system",
	url: '',
	image: './images/atlassian.svg',
	colorGroups: [
		{
			name: 'Blue',
			description: "Atlassian's primary brand color",
			shades: [
				{ name: '100', value: '#EAE6FF' },
				{ name: '200', value: '#C0B6F2' },
				{ name: '300', value: '#998DD9' },
				{ name: '400', value: '#8777D9' },
				{ name: '500', value: '#6554C0' },
				{ name: '600', value: '#5243AA' },
				{ name: '700', value: '#403294' },
				{ name: '800', value: '#322A7C' },
				{ name: '900', value: '#292169' }
			]
		},
		{
			name: 'Red',
			description: 'Error and danger messaging',
			shades: [
				{ name: '100', value: '#FFEBE6' },
				{ name: '200', value: '#FFBDAD' },
				{ name: '300', value: '#FF8F73' },
				{ name: '400', value: '#FF7452' },
				{ name: '500', value: '#FF5630' },
				{ name: '600', value: '#E34933' },
				{ name: '700', value: '#BF2600' },
				{ name: '800', value: '#94241E' },
				{ name: '900', value: '#7A1E17' }
			]
		},
		{
			name: 'Green',
			description: 'Success messaging',
			shades: [
				{ name: '100', value: '#E3FCEF' },
				{ name: '200', value: '#ABF5D1' },
				{ name: '300', value: '#79F2C0' },
				{ name: '400', value: '#57D9A3' },
				{ name: '500', value: '#36B37E' },
				{ name: '600', value: '#00875A' },
				{ name: '700', value: '#006644' },
				{ name: '800', value: '#00533B' },
				{ name: '900', value: '#004233' }
			]
		}
	]
};

export default atlassian;

import type { ColorSystem } from '$lib/types/colorSystem';
export const vitamin: ColorSystem = {
	id: 'vitamin-color-system',
	name: 'Vitamin',
	description: "Decathlon's design system color palette",
	url: 'https://www.colorsandfonts.com/color-systems/vitamin-color-system/',
	image: './images/vitamin.svg',
	colorGroups: [
		{
			name: 'Purple',
			description: 'Primary brand color',
			shades: [
				{ name: '10', value: '#2C202D' },
				{ name: '20', value: '#49354B' },
				{ name: '30', value: '#5B415D' },
				{ name: '40', value: '#6C4E6F' },
				{ name: '50', value: '#966F9A' },
				{ name: '60', value: '#AC8DAF' },
				{ name: '70', value: '#DCCFDD' },
				{ name: '80', value: '#F2EDF2' }
			]
		},
		{
			name: 'Blue',
			description: 'Secondary brand color',
			shades: [
				{ name: '10', value: '#012B49' },
				{ name: '20', value: '#00537D' },
				{ name: '30', value: '#00689D' },
				{ name: '40', value: '#007DBC' },
				{ name: '50', value: '#3D9ACC' },
				{ name: '60', value: '#7EBEE0' },
				{ name: '70', value: '#BEDEEF' },
				{ name: '80', value: '#E7F3F9' }
			]
		},
		{
			name: 'Green',
			description: 'Indicates success',
			shades: [
				{ name: '10', value: '#006F43' },
				{ name: '20', value: '#017F5C' },
				{ name: '30', value: '#029E73' },
				{ name: '40', value: '#02BE8A' },
				{ name: '50', value: '#21CE9C' },
				{ name: '60', value: '#7CDFC4' },
				{ name: '70', value: '#BEEFE2' },
				{ name: '80', value: '#E4F9F3' }
			]
		},
		{
			name: 'Conifer Green',
			description: 'Used for natural accents',
			shades: [
				{ name: '10', value: '#256C1D' },
				{ name: '20', value: '#378D2E' },
				{ name: '30', value: '#41A036' },
				{ name: '40', value: '#23A942' },
				{ name: '50', value: '#74C76A' },
				{ name: '60', value: '#88D77F' },
				{ name: '70', value: '#CBF0C7' },
				{ name: '80', value: '#EAFBE8' }
			]
		},
		{
			name: 'Yellow',
			description: 'Indicates attention is required',
			shades: [
				{ name: '10', value: '#67611B' },
				{ name: '20', value: '#999028' },
				{ name: '30', value: '#BCB02C' },
				{ name: '40', value: '#FFEA28' },
				{ name: '50', value: '#FFF370' },
				{ name: '60', value: '#FFF58D' },
				{ name: '70', value: '#FFFBC7' },
				{ name: '80', value: '#FFFFE0' }
			]
		},
		{
			name: 'Orange',
			description: 'Indicates a warning',
			shades: [
				{ name: '10', value: '#673216' },
				{ name: '20', value: '#9A4B21' },
				{ name: '30', value: '#C15E29' },
				{ name: '40', value: '#FF600A' },
				{ name: '50', value: '#FA9C69' },
				{ name: '60', value: '#FAC3A5' },
				{ name: '70', value: '#FFE4D6' },
				{ name: '80', value: '#FFEF3D' }
			]
		},
		{
			name: 'Red',
			description: 'Indicates a problem',
			shades: [
				{ name: '10', value: '#5A0005' },
				{ name: '20', value: '#870007' },
				{ name: '30', value: '#AB0009' },
				{ name: '40', value: '#E3262F' },
				{ name: '50', value: '#FD7278' },
				{ name: '60', value: '#FD9297' },
				{ name: '70', value: '#FEC9CB' },
				{ name: '80', value: '#FEECED' }
			]
		},
		{
			name: 'Grey',
			description: 'Used for neutral accents',
			shades: [
				{ name: '10', value: '#001018' },
				{ name: '20', value: '#142129' },
				{ name: '30', value: '#1A2A34' },
				{ name: '40', value: '#344450' },
				{ name: '50', value: '#4E5D6B' },
				{ name: '60', value: '#687787' },
				{ name: '70', value: '#8996A2' },
				{ name: '80', value: '#B3BAC3' },
				{ name: '90', value: '#D9DDE1' },
				{ name: '100', value: '#EFF1F3' },
				{ name: '110', value: '#F7F8F9' }
			]
		},
		{
			name: 'Black/White',
			description: 'Primary text and background colors',
			shades: [
				{ name: '10', value: '#001018' },
				{ name: '20', value: '#FFFFFF' }
			]
		}
	]
};

export default vitamin;

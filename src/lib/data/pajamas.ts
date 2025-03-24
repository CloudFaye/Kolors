import type { ColorSystem } from '$lib/types/colorSystem';
export const pajamas: ColorSystem = {
	id: 'pajamas-color-system',
	name: 'Pajamas',
	description: "GitLab's design system color palette",
	url: 'https://www.colorsandfonts.com/color-systems/pajamas-color-system/',
	image: './images/pajamas.svg',
	colorGroups: [
		{
			name: 'Blue',
			description: 'Primary brand color',
			shades: [
				{ name: '10', value: '#e9f3fc' },
				{ name: '20', value: '#cbe2f9' },
				{ name: '30', value: '#9dc7f1' },
				{ name: '40', value: '#63a6e9' },
				{ name: '50', value: '#428fdc' },
				{ name: '60', value: '#1f75cb' },
				{ name: '70', value: '#1068bf' },
				{ name: '80', value: '#0b5cad' },
				{ name: '90', value: '#064787' },
				{ name: '100', value: '#033464' }
			]
		},
		{
			name: 'Green',
			description: 'Indicates success',
			shades: [
				{ name: '10', value: '#ecf4ee' },
				{ name: '20', value: '#c3e6cd' },
				{ name: '30', value: '#91d4a8' },
				{ name: '40', value: '#52b87a' },
				{ name: '50', value: '#2da160' },
				{ name: '60', value: '#108548' },
				{ name: '70', value: '#217645' },
				{ name: '80', value: '#24663b' },
				{ name: '90', value: '#0d532a' },
				{ name: '100', value: '#0a4020' }
			]
		},
		{
			name: 'Orange',
			description: 'Indicates attention is required',
			shades: [
				{ name: '10', value: '#fdf1dd' },
				{ name: '20', value: '#f5d9a8' },
				{ name: '30', value: '#e9be74' },
				{ name: '40', value: '#d99530' },
				{ name: '50', value: '#c17d10' },
				{ name: '60', value: '#ab6100' },
				{ name: '70', value: '#9e5400' },
				{ name: '80', value: '#8f4700' },
				{ name: '90', value: '#703800' },
				{ name: '100', value: '#5c2900' }
			]
		},
		{
			name: 'Red',
			description: 'Indicates a problem',
			shades: [
				{ name: '10', value: '#fcf1ef' },
				{ name: '20', value: '#fdd4cd' },
				{ name: '30', value: '#fcb5aa' },
				{ name: '40', value: '#f57f6c' },
				{ name: '50', value: '#ec5941' },
				{ name: '60', value: '#dd2b0e' },
				{ name: '70', value: '#c91c00' },
				{ name: '80', value: '#ae1800' },
				{ name: '90', value: '#8d1300' },
				{ name: '100', value: '#660e00' }
			]
		},
		{
			name: 'Purple',
			description: 'Associated with the GitLab brand',
			shades: [
				{ name: '10', value: '#f4f0ff' },
				{ name: '20', value: '#e1d8f9' },
				{ name: '30', value: '#cbbbf2' },
				{ name: '40', value: '#ac93e6' },
				{ name: '50', value: '#9475db' },
				{ name: '60', value: '#7b58cf' },
				{ name: '70', value: '#694cc0' },
				{ name: '80', value: '#5943b6' },
				{ name: '90', value: '#453894' },
				{ name: '100', value: '#2f2a6b' }
			]
		},
		{
			name: 'Neutral',
			description: 'Primarily used for surfaces and hierarchy differentiation',
			shades: [
				{ name: '10', value: '#ffffff' },
				{ name: '20', value: '#fbfafd' },
				{ name: '30', value: '#ececef' },
				{ name: '40', value: '#dcdcde' },
				{ name: '50', value: '#bfbfc3' },
				{ name: '60', value: '#a4a3a8' },
				{ name: '70', value: '#89888d' },
				{ name: '80', value: '#737278' },
				{ name: '90', value: '#626168' },
				{ name: '100', value: '#4c4b51' },
				{ name: '110', value: '#3a383f' },
				{ name: '120', value: '#28272d' }
			]
		},
		{
			name: 'Indigo',
			description: 'Used for vibrant accents and highlights',
			shades: [
				{ name: '10', value: '#f8f8ff' },
				{ name: '20', value: '#f1f1ff' },
				{ name: '30', value: '#dbdbf8' },
				{ name: '40', value: '#c7c7f2' },
				{ name: '50', value: '#a2a2e6' },
				{ name: '60', value: '#8181d7' },
				{ name: '70', value: '#6666c4' },
				{ name: '80', value: '#5252b5' },
				{ name: '90', value: '#41419f' },
				{ name: '100', value: '#303083' },
				{ name: '110', value: '#222261' },
				{ name: '120', value: '#14143d' }
			]
		},
		{
			name: 'Light Blue',
			description: 'Used for softer, calming accents',
			shades: [
				{ name: '10', value: '#eef3f7' },
				{ name: '20', value: '#dde6ee' },
				{ name: '30', value: '#c1d4e6' },
				{ name: '40', value: '#a0bedc' },
				{ name: '50', value: '#74a3d3' },
				{ name: '60', value: '#4f8bc7' },
				{ name: '70', value: '#3476b9' },
				{ name: '80', value: '#2268ae' },
				{ name: '90', value: '#145aa1' },
				{ name: '100', value: '#0e4d8d' },
				{ name: '110', value: '#0c4277' },
				{ name: '120', value: '#0a3764' }
			]
		},
		{
			name: 'Light Red',
			description: 'Used for softer, warm accents',
			shades: [
				{ name: '10', value: '#fdf9f8' },
				{ name: '20', value: '#faf2f1' },
				{ name: '30', value: '#f6d9d5' },
				{ name: '40', value: '#ebada2' },
				{ name: '50', value: '#e07f6f' },
				{ name: '60', value: '#d36250' },
				{ name: '70', value: '#c24b38' },
				{ name: '80', value: '#b53a26' },
				{ name: '90', value: '#a02e1c' },
				{ name: '100', value: '#8b2212' },
				{ name: '110', value: '#751709' },
				{ name: '120', value: '#5c1105' }
			]
		}
	]
};

export default pajamas;

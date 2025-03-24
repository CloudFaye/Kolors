import type { ColorSystem } from '$lib/types/colorSystem';
export const apple: ColorSystem = {
	id: 'apple-design',
	name: 'Apple Design',
	description: "Apple's Human Interface Guidelines colors",
	url: '',
	image: './images/Apple.png',
	colorGroups: [
		{
			name: 'Light Mode',
			shades: [
				{ name: 'Red', value: '#ff3b30' },
				{ name: 'Orange', value: '#ff9500' },
				{ name: 'Yellow', value: '#ffcc00' },
				{ name: 'Green', value: '#34c759' },
				{ name: 'Mint', value: '#00c7be' },
				{ name: 'Teal', value: '#30b0c7' },
				{ name: 'Cyan', value: '#32ade6' },
				{ name: 'Blue', value: '#007aff' },
				{ name: 'Indigo', value: '#5856d6' },
				{ name: 'Purple', value: '#af52de' },
				{ name: 'Pink', value: '#ff2d55' },
				{ name: 'Brown', value: '#a2845e' }
			]
		},
		{
			name: 'Dark Mode',
			shades: [
				{ name: 'Red', value: '#ff453a' },
				{ name: 'Orange', value: '#ff9f0a' },
				{ name: 'Yellow', value: '#ffd60a' },
				{ name: 'Green', value: '#30d158' },
				{ name: 'Mint', value: '#63e6e2' },
				{ name: 'Teal', value: '#40c8e0' },
				{ name: 'Cyan', value: '#64d2ff' },
				{ name: 'Blue', value: '#0a84ff' },
				{ name: 'Indigo', value: '#5e5ce6' },
				{ name: 'Purple', value: '#bf5af2' },
				{ name: 'Pink', value: '#ff375f' },
				{ name: 'Brown', value: '#ac8e68' }
			]
		}
	]
};

export default apple;

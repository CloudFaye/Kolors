import type { ColorSystem } from '$lib/types/colorSystem';
export const stripe: ColorSystem = {
	id: 'stripe',
	name: 'Stripe Colors',
	description: "Colors from Stripe's visual design system",
	url: '',
	image: './images/stripe.svg',
	colorGroups: [
		{
			name: 'Primary',
			shades: [
				{ name: 'Primary', value: '#635BFF' },
				{ name: 'Light', value: '#A5AFFB' },
				{ name: 'Dark', value: '#4C44EF' },
				{ name: 'Gradient Start', value: '#7A73FF' },
				{ name: 'Gradient End', value: '#635BFF' }
			]
		},
		{
			name: 'UI',
			shades: [
				{ name: 'Background', value: '#FFFFFF' },
				{ name: 'Foreground', value: '#F7FAFC' },
				{ name: 'Border', value: '#E3E8EE' },
				{ name: 'Subtle Text', value: '#697386' },
				{ name: 'Text', value: '#425466' },
				{ name: 'Dark Text', value: '#1A1F36' }
			]
		},
		{
			name: 'Status',
			shades: [
				{ name: 'Success', value: '#3ECF8E' },
				{ name: 'Warning', value: '#FFB932' },
				{ name: 'Error', value: '#EF4444' },
				{ name: 'Info', value: '#3D8AFF' }
			]
		}
	]
};

export default stripe;

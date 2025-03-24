import type { ColorSystem } from '$lib/types/colorSystem';
export const skeleton: ColorSystem = {
	id: 'skeleton',
	name: 'Skeleton UI',
	description: 'The official color palette from Skeleton UI design system',
	url: 'https://www.skeleton.dev/docs/design/colors',
	image: './images/skeleton.svg', // You'll need to add this image
	colorGroups: [
		{
			name: 'Primary',
			description: 'Primary brand colors',
			shades: [
				{ name: '50', value: '#F2F2F2' },
				{ name: '100', value: '#E6E6E6' },
				{ name: '200', value: '#CCCCCC' },
				{ name: '300', value: '#B3B3B3' },
				{ name: '400', value: '#999999' },
				{ name: '500', value: '#808080' },
				{ name: '600', value: '#666666' },
				{ name: '700', value: '#4D4D4D' },
				{ name: '800', value: '#333333' },
				{ name: '900', value: '#1A1A1A' }
			]
		},
		{
			name: 'Surface',
			description: 'Background and surface colors',
			shades: [
				{ name: '50', value: '#FFFFFF' },
				{ name: '100', value: '#FAFAFA' },
				{ name: '200', value: '#F5F5F5' },
				{ name: '300', value: '#E9E9E9' },
				{ name: '400', value: '#D4D4D4' },
				{ name: '500', value: '#BFBFBF' },
				{ name: '600', value: '#A3A3A3' },
				{ name: '700', value: '#858585' },
				{ name: '800', value: '#666666' },
				{ name: '900', value: '#474747' }
			]
		},
		{
			name: 'Warning',
			description: 'Warning and alert colors',
			shades: [
				{ name: '50', value: '#FFF5F5' },
				{ name: '100', value: '#FFE3E3' },
				{ name: '200', value: '#FFC9C9' },
				{ name: '300', value: '#FFA8A8' },
				{ name: '400', value: '#FF8787' },
				{ name: '500', value: '#FF6B6B' },
				{ name: '600', value: '#FA5252' },
				{ name: '700', value: '#F03E3E' },
				{ name: '800', value: '#E03131' },
				{ name: '900', value: '#C92A2A' }
			]
		},
		{
			name: 'Error',
			description: 'Error and danger colors',
			shades: [
				{ name: '50', value: '#FFF5F5' },
				{ name: '100', value: '#FFE3E3' },
				{ name: '200', value: '#FFC9C9' },
				{ name: '300', value: '#FFA8A8' },
				{ name: '400', value: '#FF8787' },
				{ name: '500', value: '#FF6B6B' },
				{ name: '600', value: '#FA5252' },
				{ name: '700', value: '#F03E3E' },
				{ name: '800', value: '#E03131' },
				{ name: '900', value: '#C92A2A' }
			]
		},
		{
			name: 'Success',
			description: 'Success and positive colors',
			shades: [
				{ name: '50', value: '#F0FDF4' },
				{ name: '100', value: '#DCFCE7' },
				{ name: '200', value: '#BBF7D0' },
				{ name: '300', value: '#86EFAC' },
				{ name: '400', value: '#4ADE80' },
				{ name: '500', value: '#22C55E' },
				{ name: '600', value: '#16A34A' },
				{ name: '700', value: '#15803D' },
				{ name: '800', value: '#166534' },
				{ name: '900', value: '#14532D' }
			]
		}
	]
};

export default skeleton;

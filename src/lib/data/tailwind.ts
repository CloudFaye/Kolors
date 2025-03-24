import type { ColorSystem } from '$lib/types/colorSystem';
export const tailwind: ColorSystem = {
	id: 'tailwind',
	name: 'Tailwind CSS',
	description: 'The default color palette from Tailwind CSS',
	url: '',
	image: './images/tailwind.svg',
	colorGroups: [
		{
			name: 'Slate',
			shades: [
				{ name: '50', value: '#f8fafc' },
				{ name: '100', value: '#f1f5f9' },
				{ name: '200', value: '#e2e8f0' },
				{ name: '300', value: '#cbd5e1' },
				{ name: '400', value: '#94a3b8' },
				{ name: '500', value: '#64748b' },
				{ name: '600', value: '#475569' },
				{ name: '700', value: '#334155' },
				{ name: '800', value: '#1e293b' },
				{ name: '900', value: '#0f172a' },
				{ name: '950', value: '#020617' }
			]
		},
		{
			name: 'Blue',
			shades: [
				{ name: '50', value: '#eff6ff' },
				{ name: '100', value: '#dbeafe' },
				{ name: '200', value: '#bfdbfe' },
				{ name: '300', value: '#93c5fd' },
				{ name: '400', value: '#60a5fa' },
				{ name: '500', value: '#3b82f6' },
				{ name: '600', value: '#2563eb' },
				{ name: '700', value: '#1d4ed8' },
				{ name: '800', value: '#1e40af' },
				{ name: '900', value: '#1e3a8a' },
				{ name: '950', value: '#172554' }
			]
		},
		{
			name: 'Green',
			shades: [
				{ name: '50', value: '#f0fdf4' },
				{ name: '100', value: '#dcfce7' },
				{ name: '200', value: '#bbf7d0' },
				{ name: '300', value: '#86efac' },
				{ name: '400', value: '#4ade80' },
				{ name: '500', value: '#22c55e' },
				{ name: '600', value: '#16a34a' },
				{ name: '700', value: '#15803d' },
				{ name: '800', value: '#166534' },
				{ name: '900', value: '#14532d' },
				{ name: '950', value: '#052e16' }
			]
		}
	]
};

export default tailwind;

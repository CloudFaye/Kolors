import type { ColorSystem } from '$lib/types/colorSystem';
export const bootstrap: ColorSystem = {
	id: 'bootstrap',
	name: 'Bootstrap 5',
	description: 'The official color system from Bootstrap 5',
	url: '',
	image: './images/bootstrap.svg',
	colorGroups: [
		{
			name: 'Core Colors',
			shades: [
				{ name: 'Primary', value: '#0d6efd' },
				{ name: 'Secondary', value: '#6c757d' },
				{ name: 'Success', value: '#198754' },
				{ name: 'Danger', value: '#dc3545' },
				{ name: 'Warning', value: '#ffc107' },
				{ name: 'Info', value: '#0dcaf0' },
				{ name: 'Light', value: '#f8f9fa' },
				{ name: 'Dark', value: '#212529' }
			]
		},
		{
			name: 'Blue',
			shades: [
				{ name: '100', value: '#cfe2ff' },
				{ name: '200', value: '#9ec5fe' },
				{ name: '300', value: '#6ea8fe' },
				{ name: '400', value: '#3d8bfd' },
				{ name: '500', value: '#0d6efd' },
				{ name: '600', value: '#0a58ca' },
				{ name: '700', value: '#084298' },
				{ name: '800', value: '#052c65' },
				{ name: '900', value: '#031633' }
			]
		},
		{
			name: 'Indigo',
			shades: [
				{ name: '100', value: '#e0cffc' },
				{ name: '200', value: '#c29ffa' },
				{ name: '300', value: '#a370f7' },
				{ name: '400', value: '#8540f5' },
				{ name: '500', value: '#6610f2' },
				{ name: '600', value: '#520dc2' },
				{ name: '700', value: '#3d0a91' },
				{ name: '800', value: '#290661' },
				{ name: '900', value: '#140330' }
			]
		},
		{
			name: 'Purple',
			shades: [
				{ name: '100', value: '#e2d9f3' },
				{ name: '200', value: '#c5b3e6' },
				{ name: '300', value: '#a98eda' },
				{ name: '400', value: '#8c68cd' },
				{ name: '500', value: '#6f42c1' },
				{ name: '600', value: '#59359a' },
				{ name: '700', value: '#432874' },
				{ name: '800', value: '#2c1a4d' },
				{ name: '900', value: '#160d27' }
			]
		},
		{
			name: 'Pink',
			shades: [
				{ name: '100', value: '#f7d6e6' },
				{ name: '200', value: '#efadce' },
				{ name: '300', value: '#e685b5' },
				{ name: '400', value: '#de5c9d' },
				{ name: '500', value: '#d63384' },
				{ name: '600', value: '#ab296a' },
				{ name: '700', value: '#801f4f' },
				{ name: '800', value: '#561435' },
				{ name: '900', value: '#2b0a1a' }
			]
		},
		{
			name: 'Red',
			shades: [
				{ name: '100', value: '#f8d7da' },
				{ name: '200', value: '#f1aeb5' },
				{ name: '300', value: '#ea868f' },
				{ name: '400', value: '#e35d6a' },
				{ name: '500', value: '#dc3545' },
				{ name: '600', value: '#b02a37' },
				{ name: '700', value: '#842029' },
				{ name: '800', value: '#58151c' },
				{ name: '900', value: '#2c0b0e' }
			]
		},
		{
			name: 'Orange',
			shades: [
				{ name: '100', value: '#ffe5d0' },
				{ name: '200', value: '#fecba1' },
				{ name: '300', value: '#feb272' },
				{ name: '400', value: '#fd9843' },
				{ name: '500', value: '#fd7e14' },
				{ name: '600', value: '#ca6510' },
				{ name: '700', value: '#984c0c' },
				{ name: '800', value: '#653208' },
				{ name: '900', value: '#331904' }
			]
		},
		{
			name: 'Yellow',
			shades: [
				{ name: '100', value: '#fff3cd' },
				{ name: '200', value: '#ffe69c' },
				{ name: '300', value: '#ffda6a' },
				{ name: '400', value: '#ffcd39' },
				{ name: '500', value: '#ffc107' },
				{ name: '600', value: '#cc9a06' },
				{ name: '700', value: '#997404' },
				{ name: '800', value: '#664d03' },
				{ name: '900', value: '#332701' }
			]
		},
		{
			name: 'Green',
			shades: [
				{ name: '100', value: '#d1e7dd' },
				{ name: '200', value: '#a3cfbb' },
				{ name: '300', value: '#75b798' },
				{ name: '400', value: '#479f76' },
				{ name: '500', value: '#198754' },
				{ name: '600', value: '#146c43' },
				{ name: '700', value: '#0f5132' },
				{ name: '800', value: '#0a3622' },
				{ name: '900', value: '#051b11' }
			]
		},
		{
			name: 'Teal',
			shades: [
				{ name: '100', value: '#d2f4ea' },
				{ name: '200', value: '#a6e9d5' },
				{ name: '300', value: '#79dfc1' },
				{ name: '400', value: '#4dd4ac' },
				{ name: '500', value: '#20c997' },
				{ name: '600', value: '#1aa078' },
				{ name: '700', value: '#137858' },
				{ name: '800', value: '#0d5039' },
				{ name: '900', value: '#06281b' }
			]
		},
		{
			name: 'Cyan',
			shades: [
				{ name: '100', value: '#cff4fc' },
				{ name: '200', value: '#9eeaf9' },
				{ name: '300', value: '#6edff6' },
				{ name: '400', value: '#3dd5f3' },
				{ name: '500', value: '#0dcaf0' },
				{ name: '600', value: '#0aa2c0' },
				{ name: '700', value: '#087990' },
				{ name: '800', value: '#055160' },
				{ name: '900', value: '#032830' }
			]
		},
		{
			name: 'Gray',
			shades: [
				{ name: '100', value: '#f8f9fa' },
				{ name: '200', value: '#e9ecef' },
				{ name: '300', value: '#dee2e6' },
				{ name: '400', value: '#ced4da' },
				{ name: '500', value: '#adb5bd' },
				{ name: '600', value: '#6c757d' },
				{ name: '700', value: '#495057' },
				{ name: '800', value: '#343a40' },
				{ name: '900', value: '#212529' }
			]
		}
	]
};

export default bootstrap;

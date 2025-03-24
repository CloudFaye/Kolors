import type { ColorSystem } from '$lib/types/colorSystem';
export const radix: ColorSystem = {
	id: 'radix-ui',
	name: 'Radix UI Colors',
	description: 'A gorgeous, accessible color system for building functional and beautiful apps',
	url: 'https://www.radix-ui.com/colors',
	image: './images/radix.png',
	colorGroups: [
		{
			name: 'Gray',
			shades: [
				{ name: '1', value: '#fcfcfc' },
				{ name: '2', value: '#f8f8f8' },
				{ name: '3', value: '#f3f3f3' },
				{ name: '4', value: '#ededed' },
				{ name: '5', value: '#e8e8e8' },
				{ name: '6', value: '#e2e2e2' },
				{ name: '7', value: '#dbdbdb' },
				{ name: '8', value: '#c7c7c7' },
				{ name: '9', value: '#8f8f8f' },
				{ name: '10', value: '#858585' },
				{ name: '11', value: '#6f6f6f' },
				{ name: '12', value: '#171717' }
			]
		},
		{
			name: 'Mauve',
			shades: [
				{ name: '1', value: '#fdfcfd' },
				{ name: '2', value: '#f9f8f9' },
				{ name: '3', value: '#f4f2f4' },
				{ name: '4', value: '#eeedef' },
				{ name: '5', value: '#e9e8ea' },
				{ name: '6', value: '#e4e2e4' },
				{ name: '7', value: '#dcdbdd' },
				{ name: '8', value: '#bcbac7' },
				{ name: '9', value: '#8e8c99' },
				{ name: '10', value: '#84828e' },
				{ name: '11', value: '#65636d' },
				{ name: '12', value: '#211f26' }
			]
		},
		{
			name: 'Slate',
			shades: [
				{ name: '1', value: '#fcfcfd' },
				{ name: '2', value: '#f8f9fa' },
				{ name: '3', value: '#f1f3f5' },
				{ name: '4', value: '#eceef0' },
				{ name: '5', value: '#e6e8eb' },
				{ name: '6', value: '#dfe3e6' },
				{ name: '7', value: '#d7dbdf' },
				{ name: '8', value: '#c1c8cd' },
				{ name: '9', value: '#889096' },
				{ name: '10', value: '#7e868c' },
				{ name: '11', value: '#687076' },
				{ name: '12', value: '#11181c' }
			]
		},
		{
			name: 'Sage',
			shades: [
				{ name: '1', value: '#fbfdfc' },
				{ name: '2', value: '#f8faf9' },
				{ name: '3', value: '#f1f4f3' },
				{ name: '4', value: '#ecefed' },
				{ name: '5', value: '#e6e9e8' },
				{ name: '6', value: '#dfe4e2' },
				{ name: '7', value: '#d7dcda' },
				{ name: '8', value: '#c2c9c6' },
				{ name: '9', value: '#8a918e' },
				{ name: '10', value: '#808784' },
				{ name: '11', value: '#6a736f' },
				{ name: '12', value: '#141917' }
			]
		},
		{
			name: 'Olive',
			shades: [
				{ name: '1', value: '#fcfdfc' },
				{ name: '2', value: '#f8faf8' },
				{ name: '3', value: '#f2f4f2' },
				{ name: '4', value: '#ecefec' },
				{ name: '5', value: '#e6e9e6' },
				{ name: '6', value: '#dfe4df' },
				{ name: '7', value: '#d8ddd7' },
				{ name: '8', value: '#c3c8c2' },
				{ name: '9', value: '#8b918a' },
				{ name: '10', value: '#818780' },
				{ name: '11', value: '#6b726a' },
				{ name: '12', value: '#141e12' }
			]
		},
		{
			name: 'Sand',
			shades: [
				{ name: '1', value: '#fdfdfc' },
				{ name: '2', value: '#f9f9f8' },
				{ name: '3', value: '#f3f3f2' },
				{ name: '4', value: '#eeeeec' },
				{ name: '5', value: '#e9e9e6' },
				{ name: '6', value: '#e3e3e0' },
				{ name: '7', value: '#dbdbd7' },
				{ name: '8', value: '#c8c7c1' },
				{ name: '9', value: '#90908c' },
				{ name: '10', value: '#868682' },
				{ name: '11', value: '#706f6c' },
				{ name: '12', value: '#1b1b18' }
			]
		},
		{
			name: 'Tomato',
			shades: [
				{ name: '1', value: '#fffcfc' },
				{ name: '2', value: '#fff8f7' },
				{ name: '3', value: '#fff0ee' },
				{ name: '4', value: '#ffe6e2' },
				{ name: '5', value: '#fdd8d3' },
				{ name: '6', value: '#fac7be' },
				{ name: '7', value: '#f3b0a2' },
				{ name: '8', value: '#ea9280' },
				{ name: '9', value: '#e54d2e' },
				{ name: '10', value: '#db4324' },
				{ name: '11', value: '#ca3214' },
				{ name: '12', value: '#341711' }
			]
		},
		{
			name: 'Blue',
			shades: [
				{ name: '1', value: '#fbfdff' },
				{ name: '2', value: '#f5faff' },
				{ name: '3', value: '#edf6ff' },
				{ name: '4', value: '#e1f0ff' },
				{ name: '5', value: '#cee7fe' },
				{ name: '6', value: '#b7d9f8' },
				{ name: '7', value: '#96c7f2' },
				{ name: '8', value: '#5eb0ef' },
				{ name: '9', value: '#0091ff' },
				{ name: '10', value: '#0081f1' },
				{ name: '11', value: '#006adc' },
				{ name: '12', value: '#00254d' }
			]
		},
		{
			name: 'Red',
			shades: [
				{ name: '1', value: '#fffcfc' },
				{ name: '2', value: '#fff8f8' },
				{ name: '3', value: '#ffefef' },
				{ name: '4', value: '#ffe5e5' },
				{ name: '5', value: '#fdd8d8' },
				{ name: '6', value: '#f9c6c6' },
				{ name: '7', value: '#f3aeaf' },
				{ name: '8', value: '#eb9091' },
				{ name: '9', value: '#e5484d' },
				{ name: '10', value: '#dc3d43' },
				{ name: '11', value: '#cd2b31' },
				{ name: '12', value: '#381316' }
			]
		},
		{
			name: 'Ruby',
			shades: [
				{ name: '1', value: '#fffcfd' },
				{ name: '2', value: '#fff7f9' },
				{ name: '3', value: '#feeff3' },
				{ name: '4', value: '#fce5eb' },
				{ name: '5', value: '#f9d8e2' },
				{ name: '6', value: '#f4c6d7' },
				{ name: '7', value: '#edadc8' },
				{ name: '8', value: '#e58fb1' },
				{ name: '9', value: '#e93d82' },
				{ name: '10', value: '#df3478' },
				{ name: '11', value: '#cb1d63' },
				{ name: '12', value: '#43121d' }
			]
		},
		{
			name: 'Crimson',
			shades: [
				{ name: '1', value: '#fffcfd' },
				{ name: '2', value: '#fff7fb' },
				{ name: '3', value: '#feeff6' },
				{ name: '4', value: '#fce5f0' },
				{ name: '5', value: '#f9d8e7' },
				{ name: '6', value: '#f4c6db' },
				{ name: '7', value: '#edadcc' },
				{ name: '8', value: '#e58fb6' },
				{ name: '9', value: '#e93d82' },
				{ name: '10', value: '#df3478' },
				{ name: '11', value: '#cb1d63' },
				{ name: '12', value: '#43121d' }
			]
		},
		{
			name: 'Pink',
			shades: [
				{ name: '1', value: '#fffcfe' },
				{ name: '2', value: '#fff7fc' },
				{ name: '3', value: '#feeef8' },
				{ name: '4', value: '#fce5f3' },
				{ name: '5', value: '#f9d8ec' },
				{ name: '6', value: '#f3c6e2' },
				{ name: '7', value: '#ecadd4' },
				{ name: '8', value: '#e38ec3' },
				{ name: '9', value: '#d6409f' },
				{ name: '10', value: '#d23197' },
				{ name: '11', value: '#cd1d8d' },
				{ name: '12', value: '#3b0a2a' }
			]
		},
		{
			name: 'Plum',
			shades: [
				{ name: '1', value: '#fefcff' },
				{ name: '2', value: '#fdf8fe' },
				{ name: '3', value: '#f9f1fe' },
				{ name: '4', value: '#f5e8fc' },
				{ name: '5', value: '#efdbf9' },
				{ name: '6', value: '#e7ccf4' },
				{ name: '7', value: '#dcb8ee' },
				{ name: '8', value: '#cda0e5' },
				{ name: '9', value: '#ab4aba' },
				{ name: '10', value: '#a144af' },
				{ name: '11', value: '#953ea3' },
				{ name: '12', value: '#341237' }
			]
		},
		{
			name: 'Green',
			shades: [
				{ name: '1', value: '#fbfefc' },
				{ name: '2', value: '#f2fcf5' },
				{ name: '3', value: '#e9f9ee' },
				{ name: '4', value: '#ddf3e4' },
				{ name: '5', value: '#ccebd7' },
				{ name: '6', value: '#b4dfc4' },
				{ name: '7', value: '#92ceac' },
				{ name: '8', value: '#5bb98c' },
				{ name: '9', value: '#30a46c' },
				{ name: '10', value: '#299764' },
				{ name: '11', value: '#18794e' },
				{ name: '12', value: '#153226' }
			]
		},
		{
			name: 'Purple',
			shades: [
				{ name: '1', value: '#fefcfe' },
				{ name: '2', value: '#fdfaff' },
				{ name: '3', value: '#f9f1fe' },
				{ name: '4', value: '#f3e7fc' },
				{ name: '5', value: '#eddbf9' },
				{ name: '6', value: '#e3ccf4' },
				{ name: '7', value: '#d3b4ed' },
				{ name: '8', value: '#be93e4' },
				{ name: '9', value: '#8e4ec6' },
				{ name: '10', value: '#8445bc' },
				{ name: '11', value: '#793aaf' },
				{ name: '12', value: '#2b0e44' }
			]
		},
		{
			name: 'Violet',
			shades: [
				{ name: '1', value: '#fdfcfe' },
				{ name: '2', value: '#fbfaff' },
				{ name: '3', value: '#f5f2ff' },
				{ name: '4', value: '#ede9fe' },
				{ name: '5', value: '#e4defc' },
				{ name: '6', value: '#d7cff9' },
				{ name: '7', value: '#c4b8f3' },
				{ name: '8', value: '#aa99ec' },
				{ name: '9', value: '#6e56cf' },
				{ name: '10', value: '#644fc1' },
				{ name: '11', value: '#5746af' },
				{ name: '12', value: '#20134b' }
			]
		},
		{
			name: 'Iris',
			shades: [
				{ name: '1', value: '#fdfdff' },
				{ name: '2', value: '#fafbff' },
				{ name: '3', value: '#f5f7ff' },
				{ name: '4', value: '#eff1ff' },
				{ name: '5', value: '#e5e9ff' },
				{ name: '6', value: '#d9e0ff' },
				{ name: '7', value: '#c6d1ff' },
				{ name: '8', value: '#aabbff' },
				{ name: '9', value: '#5b5bd6' },
				{ name: '10', value: '#5151cd' },
				{ name: '11', value: '#4646c6' },
				{ name: '12', value: '#1d1d4d' }
			]
		},
		{
			name: 'Indigo',
			shades: [
				{ name: '1', value: '#fdfdfe' },
				{ name: '2', value: '#f8faff' },
				{ name: '3', value: '#f0f4ff' },
				{ name: '4', value: '#e6edfe' },
				{ name: '5', value: '#d9e2fc' },
				{ name: '6', value: '#c6d4f9' },
				{ name: '7', value: '#aec0f5' },
				{ name: '8', value: '#8da4ef' },
				{ name: '9', value: '#3e63dd' },
				{ name: '10', value: '#3a5ccc' },
				{ name: '11', value: '#3451b2' },
				{ name: '12', value: '#101d46' }
			]
		},
		{
			name: 'Cyan',
			shades: [
				{ name: '1', value: '#fafdfe' },
				{ name: '2', value: '#f2fcfd' },
				{ name: '3', value: '#e7f9fb' },
				{ name: '4', value: '#d8f3f6' },
				{ name: '5', value: '#c4eaef' },
				{ name: '6', value: '#aadee6' },
				{ name: '7', value: '#84cdda' },
				{ name: '8', value: '#3db9cf' },
				{ name: '9', value: '#05a2c2' },
				{ name: '10', value: '#0894b3' },
				{ name: '11', value: '#0c7792' },
				{ name: '12', value: '#04313c' }
			]
		},
		{
			name: 'Teal',
			shades: [
				{ name: '1', value: '#fafefd' },
				{ name: '2', value: '#f1fcfa' },
				{ name: '3', value: '#e7f9f5' },
				{ name: '4', value: '#d9f3ee' },
				{ name: '5', value: '#c7ebe5' },
				{ name: '6', value: '#afdfd7' },
				{ name: '7', value: '#8dcec3' },
				{ name: '8', value: '#53b9ab' },
				{ name: '9', value: '#12a594' },
				{ name: '10', value: '#0e9888' },
				{ name: '11', value: '#067a6f' },
				{ name: '12', value: '#10302b' }
			]
		},
		{
			name: 'Jade',
			shades: [
				{ name: '1', value: '#fbfefd' },
				{ name: '2', value: '#f2fcf8' },
				{ name: '3', value: '#e8f8f3' },
				{ name: '4', value: '#ddf3ec' },
				{ name: '5', value: '#ceece2' },
				{ name: '6', value: '#b9e2d6' },
				{ name: '7', value: '#9dd4c5' },
				{ name: '8', value: '#72c2af' },
				{ name: '9', value: '#30a58e' },
				{ name: '10', value: '#2b9a81' },
				{ name: '11', value: '#1d8a6e' },
				{ name: '12', value: '#153b35' }
			]
		},
		{
			name: 'Grass',
			shades: [
				{ name: '1', value: '#fbfefb' },
				{ name: '2', value: '#f3fcf3' },
				{ name: '3', value: '#ebf9eb' },
				{ name: '4', value: '#dff3df' },
				{ name: '5', value: '#ceebcf' },
				{ name: '6', value: '#b7dfba' },
				{ name: '7', value: '#97cf9c' },
				{ name: '8', value: '#65ba75' },
				{ name: '9', value: '#46a758' },
				{ name: '10', value: '#3d9a50' },
				{ name: '11', value: '#297c3b' },
				{ name: '12', value: '#162919' }
			]
		},
		{
			name: 'Bronze',
			shades: [
				{ name: '1', value: '#fdfcfc' },
				{ name: '2', value: '#fdf8f6' },
				{ name: '3', value: '#f8f1ee' },
				{ name: '4', value: '#f3e9e5' },
				{ name: '5', value: '#ece0db' },
				{ name: '6', value: '#e4d6cd' },
				{ name: '7', value: '#dcc9bd' },
				{ name: '8', value: '#cbb7a8' },
				{ name: '9', value: '#a18072' },
				{ name: '10', value: '#957160' },
				{ name: '11', value: '#7d5e4d' },
				{ name: '12', value: '#3e2f28' }
			]
		},
		{
			name: 'Gold',
			shades: [
				{ name: '1', value: '#fdfdfc' },
				{ name: '2', value: '#faf9f4' },
				{ name: '3', value: '#f5f2e9' },
				{ name: '4', value: '#f0ebdd' },
				{ name: '5', value: '#eae1ce' },
				{ name: '6', value: '#e2d7be' },
				{ name: '7', value: '#d8ccac' },
				{ name: '8', value: '#cebf95' },
				{ name: '9', value: '#978b63' },
				{ name: '10', value: '#8c825a' },
				{ name: '11', value: '#776d41' },
				{ name: '12', value: '#3b3520' }
			]
		},
		{
			name: 'Brown',
			shades: [
				{ name: '1', value: '#fefdfc' },
				{ name: '2', value: '#fcf9f6' },
				{ name: '3', value: '#f8f1ec' },
				{ name: '4', value: '#f4e9e1' },
				{ name: '5', value: '#eddfd3' },
				{ name: '6', value: '#e5d4c4' },
				{ name: '7', value: '#dcc6b3' },
				{ name: '8', value: '#cdb49a' },
				{ name: '9', value: '#a18072' },
				{ name: '10', value: '#967566' },
				{ name: '11', value: '#7c5e54' },
				{ name: '12', value: '#3e2f28' }
			]
		},
		{
			name: 'Amber',
			shades: [
				{ name: '1', value: '#fefdfb' },
				{ name: '2', value: '#fff9ed' },
				{ name: '3', value: '#fff4d5' },
				{ name: '4', value: '#ffecbc' },
				{ name: '5', value: '#ffe3a2' },
				{ name: '6', value: '#ffd386' },
				{ name: '7', value: '#f3ba63' },
				{ name: '8', value: '#ee9d2b' },
				{ name: '9', value: '#ffb224' },
				{ name: '10', value: '#ffa01c' },
				{ name: '11', value: '#ad5700' },
				{ name: '12', value: '#4e2009' }
			]
		},
		{
			name: 'Orange',
			shades: [
				{ name: '1', value: '#fefcfb' },
				{ name: '2', value: '#fff8f4' },
				{ name: '3', value: '#ffedd3' },
				{ name: '4', value: '#ffe0c2' },
				{ name: '5', value: '#ffd3ab' },
				{ name: '6', value: '#ffc392' },
				{ name: '7', value: '#ffad6d' },
				{ name: '8', value: '#fa934e' },
				{ name: '9', value: '#f76808' },
				{ name: '10', value: '#ed5f00' },
				{ name: '11', value: '#bd4b00' },
				{ name: '12', value: '#451e11' }
			]
		},
		{
			name: 'Yellow',
			shades: [
				{ name: '1', value: '#fdfdf9' },
				{ name: '2', value: '#fffce8' },
				{ name: '3', value: '#fffbd1' },
				{ name: '4', value: '#fff8bb' },
				{ name: '5', value: '#fef2a4' },
				{ name: '6', value: '#f9e68c' },
				{ name: '7', value: '#efd36c' },
				{ name: '8', value: '#ebbc00' },
				{ name: '9', value: '#f5d90a' },
				{ name: '10', value: '#f7ce00' },
				{ name: '11', value: '#946800' },
				{ name: '12', value: '#35290f' }
			]
		},
		{
			name: 'Lime',
			shades: [
				{ name: '1', value: '#fcfdfa' },
				{ name: '2', value: '#f9fbe7' },
				{ name: '3', value: '#f1f8d2' },
				{ name: '4', value: '#e9f4bd' },
				{ name: '5', value: '#dfeca6' },
				{ name: '6', value: '#d3e194' },
				{ name: '7', value: '#c3d181' },
				{ name: '8', value: '#a9bc6e' },
				{ name: '9', value: '#8cbc1e' },
				{ name: '10', value: '#82b218' },
				{ name: '11', value: '#62921d' },
				{ name: '12', value: '#2a3514' }
			]
		},
		{
			name: 'Mint',
			shades: [
				{ name: '1', value: '#f9fefd' },
				{ name: '2', value: '#effefa' },
				{ name: '3', value: '#e1fbf4' },
				{ name: '4', value: '#d2f7ed' },
				{ name: '5', value: '#c0efe3' },
				{ name: '6', value: '#a5e4d4' },
				{ name: '7', value: '#7ed7c1' },
				{ name: '8', value: '#40c4aa' },
				{ name: '9', value: '#70e1c8' },
				{ name: '10', value: '#3dd9b4' },
				{ name: '11', value: '#26bc98' },
				{ name: '12', value: '#124b45' }
			]
		},
		{
			name: 'Sky',
			shades: [
				{ name: '1', value: '#f9feff' },
				{ name: '2', value: '#f1fafd' },
				{ name: '3', value: '#e6f6fc' },
				{ name: '4', value: '#d5f0fa' },
				{ name: '5', value: '#c1e8f7' },
				{ name: '6', value: '#a9def2' },
				{ name: '7', value: '#86d1ec' },
				{ name: '8', value: '#4cbfe3' },
				{ name: '9', value: '#0ba2dc' },
				{ name: '10', value: '#0396cf' },
				{ name: '11', value: '#0078a1' },
				{ name: '12', value: '#003046' }
			]
		},
		{
			name: 'Black',
			shades: [
				{ name: '1', value: '#111111' },
				{ name: '2', value: '#191919' },
				{ name: '3', value: '#222222' },
				{ name: '4', value: '#2a2a2a' },
				{ name: '5', value: '#313131' },
				{ name: '6', value: '#3a3a3a' },
				{ name: '7', value: '#484848' },
				{ name: '8', value: '#606060' },
				{ name: '9', value: '#6e6e6e' },
				{ name: '10', value: '#7b7b7b' },
				{ name: '11', value: '#b4b4b4' },
				{ name: '12', value: '#eeeeee' }
			]
		},
		{
			name: 'White',
			shades: [
				{ name: '1', value: '#ffffff' },
				{ name: '2', value: '#fcfcfc' },
				{ name: '3', value: '#f9f9f9' },
				{ name: '4', value: '#f4f4f4' },
				{ name: '5', value: '#eeeeee' },
				{ name: '6', value: '#e9e9e9' },
				{ name: '7', value: '#e3e3e3' },
				{ name: '8', value: '#d8d8d8' },
				{ name: '9', value: '#c5c5c5' },
				{ name: '10', value: '#bbbbbb' },
				{ name: '11', value: '#8f8f8f' },
				{ name: '12', value: '#111111' }
			]
		}
	]
};

export default radix;

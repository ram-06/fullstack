var countryList = [
	{
		id: 'c_01',
		name: 'India'
	},
	{
		id: 'c_02',
		name: 'Japan'
	}, {
		id: 'c_04',
		name: 'USA'
	},...
	...
];

<select>
	<option id="c_01">India</option>
	<option id="c_02">Japan</option>
	<option id="c_04">Japan</option>
</select>


var stateList: {
	'c_01': [
		{
			id: 's_01',
			name: 'TElangana'
		},
		{
			id: 's_02',
			name: 'Maharastra'
		},
		{
			id: 's_03',
			name: 'Orrisa'
		},
		...
	],
	'c_04': [
		{
			id: 's_01',
			name: 'NEwyork'
		},
		{
			id: 's_02',
			name: 'Chrlt'
		},
		
		...
	]
}

var district = {
	's_01': ['Hyderabad', 'Warangal', ...],
	's_02:...
	...
	....
}
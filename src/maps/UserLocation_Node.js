const getGeohashRange = require('./getGeoHashRange');

const latitude = 47.61909431141428;
const longitude = 122.34105623381305;

function getNearbyLocations(latitude, longitude) {
	let myLocations = [];
	const range = getGeohashRange(latitude, longitude, 2);
	myLocations = nearbyUsers.filter((location) => {
		return location.geohash >= range.lower && location.geohash <= range.upper;
	});
	return myLocations;
}

let nearbyUsers = [
	//Seattle Ron
	{
		latitude: 47.62818032,
		longitude: -122.29212331,
		geohash: '78qyyy6qm',
	},
	//Bellevue
	{ latitude: 47.6101, longitude: -122.2015, geohash: 'txhx0r4vy' },
	//Seattle Emre
	{
		latitude: 47.7330388,
		longitude: -122.40371218,
		geohash: 'y8rp93e9j',
	},
	//Seattle Carlos
	{
		latitude: 47.69599351,
		longitude: -122.3785803,
		geohash: 'y8rp2fc37',
	},
	//NYC Esther
	{
		latitude: 40.8150937,
		longitude: 73.9112119,
		geohash: 'txk81yht0',
	},
	//NYC Ruby
	{
		latitude: 40.64492082,
		longitude: 73.84318539,
		geohash: 'txhx0r4vy',
	},
];

console.log(getNearbyLocations(latitude, longitude));

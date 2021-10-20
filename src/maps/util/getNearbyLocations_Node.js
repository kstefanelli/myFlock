const getGeohashRange = require('./getGeoHashRange');

const latitude = 47.61909431141428;
const longitude = -122.34105623381305;

function getNearbyLocations(latitude, longitude, radius) {
	let stringCompare = (a, b) => {
		if (a === b) {
			return 0;
		}

		if (a > b) {
			return 1;
		}

		return -1;
	};
	//lexicographical sort
	let myLocations = [];
	const range = getGeohashRange(latitude, longitude, radius);

	myLocations = nearbyUsers.filter((location) => {
		//return location.geohash >= range.lower && location.geohash <= range.upper
		return (
			stringCompare(location.geohash, range.lower) === 1 &&
			stringCompare(location.geohash, range.upper) === -1
		);
	});
	return myLocations;
}

let nearbyUsers = [
	//Seattle Ron
	{ latitude: 47.61909431141428, longitude: -122.34105623381305, geohash: 'c23nbhccq' },
	{
		latitude: 47.62818032,
		longitude: -122.29212331,
		geohash: 'c23ncnmw6',
	},
	//Seattle Emre
	{
		latitude: 47.7330388,
		longitude: -122.40371218,
		geohash: 'c22zw9s34',
	},
	//Seattle Carlos
	{
		latitude: 47.69599351,
		longitude: -122.3785803,
		geohash: 'c22zr4y9k',
	},
	//NYC Esther
	{
		latitude: 40.8150937,
		longitude: -73.9112119,
		geohash: 'dr72nn5mp',
	},
	//NYC Ruby
	{
		latitude: 40.64492082,
		longitude: -73.84318539,
		geohash: 'dr5rpxjjc',
	},
];

console.log(getNearbyLocations(latitude, longitude));

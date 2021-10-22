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
];

console.log(getNearbyLocations(latitude, longitude));

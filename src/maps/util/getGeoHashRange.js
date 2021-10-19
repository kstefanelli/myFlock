const geohash = require('ngeohash');

const getGeohashRange = (
	latitude,
	longitude,
	distance // miles
) => {
	const lat = 0.0144927536231884; // degrees latitude per mile --> 1deg = 69.2 mi
	const lon = 0.0181818181818182; // degrees longitude per mile --> 1deg = 54.6mi

	//latitude/longitude = lat(deg/mi) * distance(mi) = deg

	const lowerLat = latitude - lat * distance;
	const lowerLon = longitude - lon * distance;

	const upperLat = latitude + lat * distance;
	const upperLon = longitude + lon * distance;

	const lower = geohash.encode(lowerLat, lowerLon);
	const upper = geohash.encode(upperLat, upperLon);

	return {
		lower,
		upper,
	};
};
module.exports = getGeohashRange;

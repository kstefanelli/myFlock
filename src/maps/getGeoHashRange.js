const geohash = require('ngeohash');

const getGeohashRange = (
	latitude,
	longitude,
	distance // miles
) => {
	const lat = 0.0144927536231884; // degrees latitude per mile
	const lon = 0.0181818181818182; // degrees longitude per mile

	const lowerLat = latitude - lat * distance;
	const lowerLon = longitude - lon * distance;

	const upperLat = latitude + lat * distance;
	const upperLon = longitude + lon * distance;

	const lower = geohash.encode(lowerLat, lowerLon);
	const upper = geohash.encode(lowerLon, upperLon);

	return {
		lower,
		upper,
	};
};
module.exports = getGeohashRange;

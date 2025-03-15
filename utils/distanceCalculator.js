function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function calculateDistance(userLat, uerLon, schoolLat, schoolLon) {
  const R = 6371;
  const dLat = toRadians(schoolLon - userLat);
  const dLon = toRadians(schoolLat - uerLon);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(userLat)) *
      Math.cos(toRadians(schoolLat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

module.exports = { calculateDistance };

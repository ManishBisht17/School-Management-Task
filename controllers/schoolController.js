const db = require("../config/db");
const { calculateDistance } = require("../utils/distanceCalculator");

exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  db.query(
    "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)",
    [name, address, latitude, longitude],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res
        .status(201)
        .json({ message: "School added successfully", id: result.insertId });
    }
  );
};

exports.listSchools = (req, res) => {
  const userLat = parseFloat(req.query.latitude);
  const userLon = parseFloat(req.query.longitude);

  db.query("SELECT * FROM schools", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    const schoolsWithDistance = results.map((school) => ({
      ...school,
      distance:
        calculateDistance(
          userLat,
          userLon,
          school.latitude,
          school.longitude
        ).toFixed(2) + " KM",
    }));

    // Sort schools by distance
    schoolsWithDistance.sort(
      (a, b) => parseFloat(a.distance) - parseFloat(b.distance)
    );

    res.json(schoolsWithDistance);
  });
};

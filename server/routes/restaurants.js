const express = require("express");
const router = express.Router();
const User = require("../users/User");
const geolib = require("geolib");

router.get("/", async function (req, res) {
  const udaipurLatLng = { latitude: "26.2389469", longitude: "73.02430939999999" };
  const cord = req.query;
  const dist = geolib.getDistance(cord, udaipurLatLng);
  console.log(cord, udaipurLatLng, dist);
  res.send("cords", cord, udaipurLatLng);
});

module.exports = router;

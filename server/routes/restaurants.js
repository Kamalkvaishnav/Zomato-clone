const express = require("express");
const router = express.Router();
const Restaurant = require("../Restaurants/Modal");
const geolib = require("geolib");

async function getAllRestaurantsWithinRange(userLocation, range = 6000) {
  if (!userLocation.latitude || !userLocation.longitude) {
    return [];
  } else {
    const nearbyRestaurants = [];
    const restaurants = await Restaurant.find();
    for (let restaurant of restaurants) {
      const distance = geolib.getDistance(userLocation, restaurant.location);
      if (distance < range) {
        nearbyRestaurants.push(restaurant);
      }
    }
    return nearbyRestaurants;
  }
}

router.get("/", async function (req, res) {
  const userLocation = req.query;
  const restaurants = await getAllRestaurantsWithinRange(userLocation);
  return res.status(200).json(restaurants);
});

module.exports = router;

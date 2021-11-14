const express = require("express");
const router = express.Router();
const Modal = require("../Modal");

router.post("/addMenu", async (req, res) => {
  const restaurant = await Modal.findOne({ _id: req.body["res_id"] });
  console.log(restaurant);
  if (restaurant) {
    try {
      let menu = req.body.menu;
      console.log(menu);
      restaurant.menu.push(menu);
      await restaurant.save();
      return res.json({ err: false, message: "Menu  added successfully" });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ err: true, message: "Something went wrong" });
    }
  } else {
    return res
      .status(404)
      .json({ err: true, message: "No restaurant found with this id" });
  }
});

router.post("/addrest", async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    let restaurant = new Modal(data);
    await restaurant.save();
    return res.json({
      err: false,
      message: "Successfully added",
      data: restaurant,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: true, message: "Something went Wrong" });
  }
});

router.get("/single/:id", async (req, res) => {
  const restaurant = await Modal.findOne({ id: req.params["id"] });
  if (restaurant) {
    return res.json({ err: false, message: "Success", restaurant: restaurant });
  } else {
    return res
      .status(404)
      .json({ err: true, message: "No restaurant found with this id" });
  }
});

router.get("/getall", async (req, res) => {
  try {
    const resturants = await Modal.find();
    if (resturants) {
      return res.json({ err: false, message: "Success", resturants });
    } else {
      return res
        .status(404)
        .json({ err: true, message: "Fail No resturant found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: true, message: "Something went wrong" });
  }
});

module.exports = router;

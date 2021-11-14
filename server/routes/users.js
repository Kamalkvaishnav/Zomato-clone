const express = require("express");
const router = express.Router();
const User = require("../users/User");

router.get("/:uid", async function (req, res) {
  const user = await User.findOne({ uid: req.params.uid });
  console.log(user, "user");
  if (user) {
    return res.status(200).json(user);
  } else {
    return res.status(404).json("user not found");
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({ uid: req.body.uid });
    if (user) {
      return res.status(400).json({ error: "user already present" });
    }
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json("payload invalid");
  }
});

module.exports = router;

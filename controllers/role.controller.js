const router = require("express").Router();
const { Role } = require("../models");

router.post("", async (req, res) => {
  try {
    const role = await Role.create(req.body);

    return res.status(201).json({
      message: "Role created successfully",
      role,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error creating role",
      error: error.message,
    });
  }
});

router.get("", async (req, res) => {
  try {
    const role = await Role.findAll({});

    return res.status(200).json({
      message: "Role fetched successfully",
      role,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching role",
      error: error.message,
    });
  }
});
module.exports = router;

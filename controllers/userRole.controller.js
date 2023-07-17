const router = require("express").Router();
const { UserRole, User, Role } = require("../models");

router.post("", async (req, res) => {
  const { userId, roleId } = req.body;

  try {
    const userRole = await UserRole.create({
      userId: req.body.userId,
      roleId: req.body.roleId,
    });

    return res.status(201).json(userRole);
  } catch (error) {
    return res.status(400).json({
      message: "Failed to create user role",
      error: error.message,
    });
  }
});

router.get("", async (req, res) => {
  try {
    const userRole = await UserRole.findAll({ include: [User, Role] });

    return res.status(200).json(userRole);
  } catch (error) {
    return res.status(400).json({
      message: "Failed to fetch user role",
      error: error.message,
    });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    userId: req.params.userId;
    userId: req.params.userId;
    const userRole = await UserRole.findAll({
      where: {
        userId: req.params.userId,
      },
      include: [User, Role],
    });

    return res.status(200).json(userRole);
  } catch (error) {
    return res.status(400).json({
      message: "Failed to fetch user role",
      error: error.message,
    });
  }
});

module.exports = router;

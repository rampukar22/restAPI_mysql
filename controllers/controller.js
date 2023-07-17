const router = require("express").Router();
const { User, Aadhar, Address } = require("../models");

// Create user
router.post("", async (req, res) => {
  try {
    const user = await User.create(req.body);

    return res.status(201).json({
      message: "User created successfully",
      user: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to fetch user",
      error: error,
    });
  }
});

// Get all the users
router.get("", async (req, res) => {
  try {
    const users = await User.findAll();

    return res.status(200).json({
      message: "Users fetched successfully",
      users: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to fetch user",
      error: error,
    });
  }
});

// Get one user
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findOne({ where: { userId: req.params.userId } });

    return res.status(200).json({
      message: "User fetched successfully",
      user: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to fetch user",
      error: error,
    });
  }
});

// Update user
router.put("/:userId", async (req, res) => {
  try {
    const user = await User.update(req.body, {
      where: { userId: req.params.userId },
    });

    return res.status(200).json({
      message: "User updated successfully",
      user: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to update user",
      error: error.message,
    });
  }
});

// Delete user
router.delete("/:userId", async (req, res) => {
  try {
    const user = await User.destroy({
      where: { userId: req.params.userId },
    });

    return res.status(200).json({
      message: "User deleted successfully",
      user: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to delete user",
      error: error,
    });
  }
});

// Create aadhar
router.post("/:userId/aadhar", async (req, res) => {
  try {
    const aadhar = await Aadhar.create({
      aadharNumber: req.body.aadharNumber,
      userId: req.params.userId,
    });

    return res.status(201).json({
      message: "User created successfully",
      aadhar,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to create aadhar",
      error: error.message,
    });
  }
});

// fetch aadhar
router.get("/:userId/aadhar", async (req, res) => {
  try {
    const aadhar = await Aadhar.findOne({
      where: {
        userId: req.params.userId,
      },
      include: [User],
    });

    return res.status(201).json({
      message: "success",
      aadhar,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to fetch aadhar",
      error: error.message,
    });
  }
});

// create address
router.post("/:userId/address", async (req, res) => {
  try {
    const address = await Address.create({
      body: req.body.body,
      userAddressId: req.params.userId,
    });

    return res.status(201).json({
      message: "Address created successfully",
      address,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to create address",
      error: error.message,
    });
  }
});

// fetch addresses
router.get("/:userId/address", async (req, res) => {
  try {
    const addresses = await Address.findAll({
      where: {
        userAddressId: req.params.userId,
      },
      include: [User],
    });

    return res.status(201).json({
      message: "success",
      addresses,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to fetch addresses",
      error: error.message,
    });
  }
});

// specific address for a user
router.get("/:userId/address/:userAddressId", async (req, res) => {
  try {
    // const address = await Address.findByPk(req.params.userAddressId);
    const address = await Address.findOne({
      where: {
        id: req.params.userAddressId,
      },
      include: [User],
    });

    return res.status(200).json({
      message: "success",
      address,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to fetch address",
      error: error.message,
    });
  }
});

// Update address for a user
router.put("/:userId/address/:userAddressId", async (req, res) => {
  try {
    const address = await Address.update(req.body, {
      where: {
        id: req.params.userAddressId,
      },
    });

    return res.status(200).json({
      message: "address updated successfully",
      address,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to update address",
      error: error.message,
    });
  }
});

module.exports = router;

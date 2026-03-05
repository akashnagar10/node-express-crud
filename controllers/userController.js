const Users = require("../models/userModel");

const handleGetAllUsers = async (req, res) => {
  try {
    const allDbUsers = await Users.find({});
    return res.status(200).json({
      status: "success",
      data: allDbUsers,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

const handleGetUserById = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }
    return res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      status: "INTERNAL_SERVER_ERROR",
      message: error.message,
    });
  }
};

const handleUpdateUserById = async (req, res) => {
  try {
    const user = await Users.findByIdAndUpdate(
      req.params.id,
      { lastName: "Updated" },
      { new: true }
    );
    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }
    return res.json({
      status: "success",
      message: "User updated via patch successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "INTERNAL_SERVER_ERROR",
      message: error.message,
    });
  }
};

const handleDeleteUserById = async (req, res) => {
  try {
    await Users.findByIdAndDelete(req.params.id);
    return res.json({
      status: "success",
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "INTERNAL_SERVER_ERROR",
      message: error.message,
    });
  }
};

const handleCreateNewUser = async (req, res) => {
  const body = req.body;
  try {
    if (
      !body ||
      !body.firstName ||
      !body.lastName ||
      !body.email ||
      !body.jobTitle ||
      !body.gender
    ) {
      return res
        .status(400)
        .json({ status: "error", message: "All fields are required" });
    }

    const result = await Users.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      jobTitle: body.jobTitle,
      gender: body.gender,
    });
    return res.status(201).json({
      status: "success",
      message: "User added successfully",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser
};

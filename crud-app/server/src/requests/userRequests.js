const UserModel = require("../models/Users");
const slugify = require("slugify");

const createUser = async (req, res) => {
  try {
    const slug = slugify(req.body.name, {
      lower: true,
      strict: true,
    });

    const user = await UserModel.create({
      ...req.body,
      slug,
    });

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const slug = slugify(req.body.name, {
      lower: true,
      strict: true,
    });

    const user = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        slug,
      },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserBySlug = async (req, res) => {
  try {
    const user = await UserModel.findOne({ slug: req.params.slug });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createUser,
  updateUser,
  getUsers,
  getUserById,
  getUserBySlug,
  deleteUser,
};

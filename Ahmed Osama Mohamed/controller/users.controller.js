const User = require("../model/Users");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
};
const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  console.log(username, email, password);
  await User.create({
    username,
    email,
    password,
  });
  res.send("user created");
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  res.send("user deleted");
};

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
};

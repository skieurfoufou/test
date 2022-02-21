const userModel = require("../models/user");
require("../db");

const userExample = {
  firstName: "israel",
  lastName: "israeli",
  password: "a1b2c3",
  email: "israel@israeli.co.il",
  phone: "050-9876543",
  isAdmin: false,
  isSubscribed: false,
  isRegistered: false,
  creditCoins: {
    monthlyCoins: 0,
    currentBalance: 0,
    nextBalance: 0,
    purchaseBalance: 0,
  },
};

const userID = "620e208db92024b1507c6071";

const createUser = async () => {
  const user = await new userModel(userExample);
  await user.save();
  console.log(user);
};
createUser(userExample);

const readUser = async (userID) => {
  const user = await userModel.findById({ _id: userID });
  console.log(user);
  return user;
};

const updateUser = async (userID) => {
  const user = await userModel.findOneAndUpdate(
    { _id: userID },
    { phone: "050-9876543" },
    { new: true }
  );
  console.log(user);
  return user;
};
const deleteUser = async (userID) => {
  const user = await userModel.findOneAndDelete({ _id: userID });
  console.log(user);
  return user;
};

exports = { createUser, readUser, updateUser, deleteUser };

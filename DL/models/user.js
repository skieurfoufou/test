require("../db").connect();
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  isAdmin: { type: Boolean },
  registerDate: { type: Date, default: Date.now },
  creationDate: { type: Date, default: Date.now },
  isSubscribed: { type: Boolean },
  isRegistered: { type: Boolean },
  creditCoins: {
    monthlyCoins: Number,
    currentBalance: Number,
    nextBalance: Number,
    purchaseBalance: Number,
  },
});
exports = mongoose.model("user", userSchema);

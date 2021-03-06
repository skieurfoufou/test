require("dotenv").config();
const mongoose = require("mongoose");

exports.connect = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL,
      { useNewUrlParser: true },
      (err) => {
        if (err) return console.log("ERROR:", err);
        console.log(
          "MONGODB Connection -- Ready state is:",
          mongoose.connection.readyState
        );
      }
    );
  } catch (err) {
    console.log("error mongoose", err);
  }
};

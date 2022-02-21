require("../db").connect();
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  roomID: { type: mongoose.SchemaType.ObjectId, ref: "room" },
  userID: { type: mongoose.SchemaType.ObjectId, ref: "user" },
  paymentType: { type: mongoose.SchemaType.ObjectId, ref: "payMethod" },
  isAdmin: { type: Boolean },
  logDate: { type: Date },
  meetingDate: { type: Date },
  urlCalendar: String,
  orderCost: Number,
  paidVia: {
    monthly: Number,
    credit: Number,
    purchase: Number,
  },
});
exports = mongoose.model("booking", bookingSchema);

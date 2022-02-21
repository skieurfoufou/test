const bookingModel = require("../models/booking");
require("../db");

const bookingExample = {
  startTime: "12:00",
  endTime: "13:00",
  roomID: { type: mongoose.SchemaType.ObjectId, ref: "room" },
  userID: { type: mongoose.SchemaType.ObjectId, ref: "user" },
  paymentType: { type: mongoose.SchemaType.ObjectId, ref: "payMethod" },
  isAdmin: false,
  meetingDate: 2022 - 03 - 10,
  urlCalendar: String,
  orderCost: Number,
  paidVia: {
    monthly: Number,
    credit: Number,
    purchase: Number,
  },
};

const userID = "620e208db92024b1507c6071";

const createBooking = async () => {
  const booking = await new bookingModel(bookingExample);
  await booking.save();
  console.log(booking);
};
createUser(bookingExample);

const readBooking = async (bookingID) => {
  const booking = await bookingModel.findById({ _id: bookingID });
  console.log(booking);
  return booking;
};

const updateBooking = async (bookingID) => {
  const booking = await bookingModel.findOneAndUpdate(
    { _id: bookingID },
    { meetingDate: 2022 - 03 - 10 },
    { new: true }
  );
  console.log(booking);
  return booking;
};
const deleteBooking = async (bookingID) => {
  const booking = await bookingModel.findOneAndDelete({ _id: bookingID });
  console.log(booking);
  return booking;
};

exports = { createBooking, readBooking, updateBooking, deleteBooking };

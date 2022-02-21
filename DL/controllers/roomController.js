const roomModel = require("../models/room");
require("../db");

const roomExample = {
  name: "jerusalem",
  maxOfPeople: 12,
  value: 500,
};

const userID = "620e208db92024b1507c6071";

const createRoom = async () => {
  const room = await new roomModel(roomExample);
  await room.save();
  console.log(room);
};
createRoom(roomExample);

const readRoom = async (roomID) => {
  const room = await roomModel.findById({ _id: roomID });
  console.log(room);
  return room;
};

const updateRoom = async (roomID) => {
  const room = await roomModel.findOneAndUpdate(
    { _id: roomID },
    { name: "Jerusalem" },
    { new: true }
  );
  console.log(room);
  return room;
};
const deleteRoom = async (roomID) => {
  const room = await roomModel.findOneAndDelete({ _id: roomID });
  console.log(room);
  return room;
};

exports = { createRoom, readRoom, updateRoom, deleteRoom };

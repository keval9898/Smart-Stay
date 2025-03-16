const Parking = require("../models/parking");

const addParking = async (data) => {
  return await Parking.create(data);
};

const getAllParkings = async () => {
  return await Parking.findAll();
};

const getParkingById = async (id) => {
  return await Parking.findByPk(id);
};

const updateParkingStatus = async (id, status) => {
  const parking = await Parking.findByPk(id);
  if (!parking) throw new Error("Parking slot not found");

  return await parking.update({ status });
};

const deleteParking = async (id) => {
  const parking = await Parking.findByPk(id);
  if (!parking) throw new Error("Parking slot not found");

  return await parking.destroy();
};

module.exports = { addParking, getAllParkings, getParkingById, updateParkingStatus, deleteParking };

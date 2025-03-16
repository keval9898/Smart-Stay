const Rental = require("../models/rental");

const getAllRentals = async () => {
  return await Rental.findAll();
};

const getRentalById = async (id) => {
  return await Rental.findByPk(id);
};

const createRental = async (data) => {
  return await Rental.create(data);
};

const updateRental = async (id, data) => {
  const rental = await Rental.findByPk(id);
  if (!rental) throw new Error("Rental not found");
  return await rental.update(data);
};

const deleteRental = async (id) => {
  const rental = await Rental.findByPk(id);
  if (!rental) throw new Error("Rental not found");
  return await rental.destroy();
};

module.exports = { getAllRentals, getRentalById, createRental, updateRental, deleteRental };

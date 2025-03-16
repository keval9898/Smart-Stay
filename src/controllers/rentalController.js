const RentalService = require("../services/rentalService");

const getAllRentals = async (req, res) => {
  try {
    const rentals = await RentalService.getAllRentals();
    res.status(200).json(rentals);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getRentalById = async (req, res) => {
  try {
    const rental = await RentalService.getRentalById(req.params.id);
    res.status(200).json(rental);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createRental = async (req, res) => {
  try {
    const rental = await RentalService.createRental(req.body);
    res.status(201).json({ message: "Rental created successfully", rental });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateRental = async (req, res) => {
  try {
    const updatedRental = await RentalService.updateRental(req.params.id, req.body);
    res.status(200).json({ message: "Rental updated successfully", updatedRental });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteRental = async (req, res) => {
  try {
    await RentalService.deleteRental(req.params.id);
    res.status(200).json({ message: "Rental deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllRentals, getRentalById, createRental, updateRental, deleteRental };

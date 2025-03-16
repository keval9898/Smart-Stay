const ParkingService = require("../services/parkingService");

const addParking = async (req, res) => {
  try {
    const parking = await ParkingService.addParking(req.body);
    res.status(201).json({ message: "Parking assigned successfully", parking });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllParkings = async (req, res) => {
  try {
    const parkings = await ParkingService.getAllParkings();
    res.status(200).json(parkings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getParkingById = async (req, res) => {
  try {
    const parking = await ParkingService.getParkingById(req.params.id);
    if (!parking) return res.status(404).json({ message: "Parking slot not found" });
    res.status(200).json(parking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateParkingStatus = async (req, res) => {
  try {
    const updatedParking = await ParkingService.updateParkingStatus(req.params.id, req.body.status);
    res.status(200).json({ message: "Parking status updated", updatedParking });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteParking = async (req, res) => {
  try {
    await ParkingService.deleteParking(req.params.id);
    res.status(200).json({ message: "Parking slot deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addParking, getAllParkings, getParkingById, updateParkingStatus, deleteParking };

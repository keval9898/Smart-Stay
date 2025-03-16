const LocationService = require("../services/locationService");

const getAllLocations = async (req, res) => {
  try {
    const locations = await LocationService.getAllLocations();
    res.status(200).json(locations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getLocationById = async (req, res) => {
  try {
    const location = await LocationService.getLocationById(req.params.id);
    res.status(200).json(location);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createLocation = async (req, res) => {
  try {
    const location = await LocationService.createLocation(req.body);
    res.status(201).json({ message: "Location added successfully", location });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateLocation = async (req, res) => {
  try {
    const updatedLocation = await LocationService.updateLocation(req.params.id, req.body);
    res.status(200).json({ message: "Location updated successfully", updatedLocation });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteLocation = async (req, res) => {
  try {
    await LocationService.deleteLocation(req.params.id);
    res.status(200).json({ message: "Location deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllLocations, getLocationById, createLocation, updateLocation, deleteLocation };

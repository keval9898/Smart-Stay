const LocationService = require("../models/locationService");

const getAllLocations = async () => {
  return await LocationService.findAll();
};

const getLocationById = async (id) => {
  return await LocationService.findByPk(id);
};

const createLocation = async (data) => {
  return await LocationService.create(data);
};

const updateLocation = async (id, data) => {
  const location = await LocationService.findByPk(id);
  if (!location) throw new Error("Location not found");
  return await location.update(data);
};

const deleteLocation = async (id) => {
  const location = await LocationService.findByPk(id);
  if (!location) throw new Error("Location not found");
  return await location.destroy();
};

module.exports = { getAllLocations, getLocationById, createLocation, updateLocation, deleteLocation };

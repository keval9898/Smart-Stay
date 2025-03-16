const Facility = require("../models/facility");

const createFacility = async (data) => {
  return await Facility.create(data);
};

const getAllFacilities = async () => {
  return await Facility.findAll();
};

const getFacilityById = async (id) => {
  return await Facility.findByPk(id);
};

const updateFacility = async (id, data) => {
  const facility = await Facility.findByPk(id);
  if (!facility) throw new Error("Facility not found");

  return await facility.update(data);
};

const deleteFacility = async (id) => {
  const facility = await Facility.findByPk(id);
  if (!facility) throw new Error("Facility not found");

  return await facility.destroy();
};

module.exports = { createFacility, getAllFacilities, getFacilityById, updateFacility, deleteFacility };

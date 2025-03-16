const db = require("../models");

exports.getAllResidents = async () => {
  return await db.Resident.findAll();
};

exports.addResident = async (residentData) => {
  return await db.Resident.create(residentData);
};

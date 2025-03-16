const residentService = require("../services/residentService");
const responseHandler = require("../utils/responseUtil");

exports.getAllResidents = async (req, res) => {
  try {
    const residents = await residentService.getAllResidents();
    responseHandler.success(res, "Residents fetched successfully!", residents);
  } catch (error) {
    responseHandler.error(res);
  }
};

exports.addResident = async (req, res) => {
  try {
    const resident = await residentService.addResident(req.body);
    responseHandler.success(res, "Resident added successfully!", resident);
  } catch (error) {
    responseHandler.error(res);
  }
};

const FacilityService = require("../services/facilityService");

const addFacility = async (req, res) => {
  try {
    const facility = await FacilityService.createFacility(req.body);
    res.status(201).json({ message: "Facility added successfully", facility });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getFacilities = async (req, res) => {
  try {
    const facilities = await FacilityService.getAllFacilities();
    res.status(200).json(facilities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getFacilityById = async (req, res) => {
  try {
    const facility = await FacilityService.getFacilityById(req.params.id);
    if (!facility) return res.status(404).json({ message: "Facility not found" });
    res.status(200).json(facility);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateFacility = async (req, res) => {
  try {
    const updatedFacility = await FacilityService.updateFacility(req.params.id, req.body);
    res.status(200).json({ message: "Facility updated successfully", updatedFacility });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteFacility = async (req, res) => {
  try {
    await FacilityService.deleteFacility(req.params.id);
    res.status(200).json({ message: "Facility deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addFacility, getFacilities, getFacilityById, updateFacility, deleteFacility };

const express = require("express");
const router = express.Router();
const FacilityController = require("../controllers/facilityController");

router.post("/", FacilityController.addFacility);
router.get("/", FacilityController.getFacilities);
router.get("/:id", FacilityController.getFacilityById);
router.put("/:id", FacilityController.updateFacility);
router.delete("/:id", FacilityController.deleteFacility);

module.exports = router;

const express = require("express");
const router = express.Router();
const LocationServiceController = require("../controllers/locationServiceController");

router.get("/", LocationServiceController.getAllLocations);
router.get("/:id", LocationServiceController.getLocationById);
router.post("/", LocationServiceController.createLocation);
router.put("/:id", LocationServiceController.updateLocation);
router.delete("/:id", LocationServiceController.deleteLocation);

module.exports = router;

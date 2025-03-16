const express = require("express");
const router = express.Router();
const ParkingController = require("../controllers/parkingController");

router.post("/", ParkingController.addParking);
router.get("/", ParkingController.getAllParkings);
router.get("/:id", ParkingController.getParkingById);
router.put("/:id/status", ParkingController.updateParkingStatus);
router.delete("/:id", ParkingController.deleteParking);

module.exports = router;

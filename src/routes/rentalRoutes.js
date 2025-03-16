const express = require("express");
const router = express.Router();
const RentalController = require("../controllers/rentalController");

router.get("/", RentalController.getAllRentals);
router.get("/:id", RentalController.getRentalById);
router.post("/", RentalController.createRental);
router.put("/:id", RentalController.updateRental);
router.delete("/:id", RentalController.deleteRental);

module.exports = router;

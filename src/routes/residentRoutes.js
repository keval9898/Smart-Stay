const express = require("express");
const router = express.Router();
const ResidentController = require("../controllers/residentController");

router.post("/", ResidentController.addResident);
router.get("/", ResidentController.getResidents);
router.get("/:id", ResidentController.getResidentById);
router.put("/:id", ResidentController.updateResident);
router.delete("/:id", ResidentController.deleteResident);

module.exports = router;

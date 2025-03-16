const express = require("express");
const router = express.Router();
const SecurityController = require("../controllers/securityController");

router.post("/", SecurityController.logVisitorEntry);
router.get("/", SecurityController.getAllLogs);
router.get("/:id", SecurityController.getLogById);
router.put("/:id/exit", SecurityController.logVisitorExit);

module.exports = router;

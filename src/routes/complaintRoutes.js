const express = require("express");
const router = express.Router();
const ComplaintController = require("../controllers/complaintController");

router.post("/", ComplaintController.createComplaint);
router.get("/", ComplaintController.getAllComplaints);
router.get("/:id", ComplaintController.getComplaintById);
router.put("/:id/status", ComplaintController.updateComplaintStatus);
router.delete("/:id", ComplaintController.deleteComplaint);

module.exports = router;

const express = require("express");
const router = express.Router();
const AnnouncementController = require("../controllers/announcementController");

router.post("/", AnnouncementController.createAnnouncement);
router.get("/", AnnouncementController.getAllAnnouncements);
router.get("/:id", AnnouncementController.getAnnouncementById);
router.put("/:id", AnnouncementController.updateAnnouncement);
router.delete("/:id", AnnouncementController.deleteAnnouncement);

module.exports = router;

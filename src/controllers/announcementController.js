const AnnouncementService = require("../services/announcementService");

const createAnnouncement = async (req, res) => {
  try {
    const announcement = await AnnouncementService.createAnnouncement(req.body);
    res.status(201).json({ message: "Announcement created successfully", announcement });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllAnnouncements = async (req, res) => {
  try {
    const announcements = await AnnouncementService.getAllAnnouncements();
    res.status(200).json(announcements);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAnnouncementById = async (req, res) => {
  try {
    const announcement = await AnnouncementService.getAnnouncementById(req.params.id);
    if (!announcement) return res.status(404).json({ message: "Announcement not found" });
    res.status(200).json(announcement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateAnnouncement = async (req, res) => {
  try {
    const updatedAnnouncement = await AnnouncementService.updateAnnouncement(req.params.id, req.body);
    res.status(200).json({ message: "Announcement updated successfully", updatedAnnouncement });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteAnnouncement = async (req, res) => {
  try {
    await AnnouncementService.deleteAnnouncement(req.params.id);
    res.status(200).json({ message: "Announcement deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createAnnouncement, getAllAnnouncements, getAnnouncementById, updateAnnouncement, deleteAnnouncement };

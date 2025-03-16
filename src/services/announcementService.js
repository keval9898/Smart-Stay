const Announcement = require("../models/announcement");

const createAnnouncement = async (data) => {
  return await Announcement.create(data);
};

const getAllAnnouncements = async () => {
  return await Announcement.findAll();
};

const getAnnouncementById = async (id) => {
  return await Announcement.findByPk(id);
};

const updateAnnouncement = async (id, data) => {
  const announcement = await Announcement.findByPk(id);
  if (!announcement) throw new Error("Announcement not found");

  return await announcement.update(data);
};

const deleteAnnouncement = async (id) => {
  const announcement = await Announcement.findByPk(id);
  if (!announcement) throw new Error("Announcement not found");

  return await announcement.destroy();
};

module.exports = { createAnnouncement, getAllAnnouncements, getAnnouncementById, updateAnnouncement, deleteAnnouncement };

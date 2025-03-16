const Event = require("../models/event");

const getAllEvents = async () => {
  return await Event.findAll();
};

const getEventById = async (id) => {
  return await Event.findByPk(id);
};

const createEvent = async (data) => {
  return await Event.create(data);
};

const updateEvent = async (id, data) => {
  const event = await Event.findByPk(id);
  if (!event) throw new Error("Event not found");
  return await event.update(data);
};

const deleteEvent = async (id) => {
  const event = await Event.findByPk(id);
  if (!event) throw new Error("Event not found");
  return await event.destroy();
};

module.exports = { getAllEvents, getEventById, createEvent, updateEvent, deleteEvent };

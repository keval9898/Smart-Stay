const Complaint = require("../models/complaint");

const createComplaint = async (data) => {
  return await Complaint.create(data);
};

const getAllComplaints = async () => {
  return await Complaint.findAll();
};

const getComplaintById = async (id) => {
  return await Complaint.findByPk(id);
};

const updateComplaintStatus = async (id, status) => {
  const complaint = await Complaint.findByPk(id);
  if (!complaint) throw new Error("Complaint not found");

  return await complaint.update({ status });
};

const deleteComplaint = async (id) => {
  const complaint = await Complaint.findByPk(id);
  if (!complaint) throw new Error("Complaint not found");

  return await complaint.destroy();
};

module.exports = { createComplaint, getAllComplaints, getComplaintById, updateComplaintStatus, deleteComplaint };

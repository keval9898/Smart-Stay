const ComplaintService = require("../services/complaintService");

const createComplaint = async (req, res) => {
  try {
    const complaint = await ComplaintService.createComplaint(req.body);
    res.status(201).json({ message: "Complaint submitted successfully", complaint });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllComplaints = async (req, res) => {
  try {
    const complaints = await ComplaintService.getAllComplaints();
    res.status(200).json(complaints);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getComplaintById = async (req, res) => {
  try {
    const complaint = await ComplaintService.getComplaintById(req.params.id);
    if (!complaint) return res.status(404).json({ message: "Complaint not found" });
    res.status(200).json(complaint);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateComplaintStatus = async (req, res) => {
  try {
    const updatedComplaint = await ComplaintService.updateComplaintStatus(req.params.id, req.body.status);
    res.status(200).json({ message: "Complaint status updated", updatedComplaint });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteComplaint = async (req, res) => {
  try {
    await ComplaintService.deleteComplaint(req.params.id);
    res.status(200).json({ message: "Complaint deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createComplaint, getAllComplaints, getComplaintById, updateComplaintStatus, deleteComplaint };

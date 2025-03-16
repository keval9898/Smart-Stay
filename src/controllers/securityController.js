const SecurityService = require("../services/securityService");

const logVisitorEntry = async (req, res) => {
  try {
    const entry = await SecurityService.logVisitorEntry(req.body);
    res.status(201).json({ message: "Visitor entry logged successfully", entry });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllLogs = async (req, res) => {
  try {
    const logs = await SecurityService.getAllLogs();
    res.status(200).json(logs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getLogById = async (req, res) => {
  try {
    const log = await SecurityService.getLogById(req.params.id);
    if (!log) return res.status(404).json({ message: "Log entry not found" });
    res.status(200).json(log);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const logVisitorExit = async (req, res) => {
  try {
    const updatedLog = await SecurityService.logVisitorExit(req.params.id);
    res.status(200).json({ message: "Visitor exit logged successfully", updatedLog });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { logVisitorEntry, getAllLogs, getLogById, logVisitorExit };

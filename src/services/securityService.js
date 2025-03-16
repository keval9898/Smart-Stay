const SecurityLog = require("../models/securityLog");

const logVisitorEntry = async (data) => {
  return await SecurityLog.create(data);
};

const getAllLogs = async () => {
  return await SecurityLog.findAll();
};

const getLogById = async (id) => {
  return await SecurityLog.findByPk(id);
};

const logVisitorExit = async (id) => {
  const log = await SecurityLog.findByPk(id);
  if (!log) throw new Error("Log entry not found");

  return await log.update({ checkOutTime: new Date() });
};

module.exports = { logVisitorEntry, getAllLogs, getLogById, logVisitorExit };

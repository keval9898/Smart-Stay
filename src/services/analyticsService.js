const Analytics = require("../models/analytics");

const getAllAnalytics = async () => {
  return await Analytics.findAll();
};

const getAnalyticsByModule = async (module) => {
  return await Analytics.findAll({ where: { module } });
};

const recordMetric = async (data) => {
  return await Analytics.create(data);
};

module.exports = { getAllAnalytics, getAnalyticsByModule, recordMetric };

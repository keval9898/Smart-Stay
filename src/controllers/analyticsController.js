const AnalyticsService = require("../services/analyticsService");

const getAllAnalytics = async (req, res) => {
  try {
    const analytics = await AnalyticsService.getAllAnalytics();
    res.status(200).json(analytics);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAnalyticsByModule = async (req, res) => {
  try {
    const analytics = await AnalyticsService.getAnalyticsByModule(req.params.module);
    res.status(200).json(analytics);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const recordMetric = async (req, res) => {
  try {
    const metric = await AnalyticsService.recordMetric(req.body);
    res.status(201).json({ message: "Metric recorded successfully", metric });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllAnalytics, getAnalyticsByModule, recordMetric };

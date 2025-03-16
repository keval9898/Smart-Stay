const express = require("express");
const router = express.Router();
const AnalyticsController = require("../controllers/analyticsController");

router.get("/", AnalyticsController.getAllAnalytics);
router.get("/:module", AnalyticsController.getAnalyticsByModule);
router.post("/", AnalyticsController.recordMetric);

module.exports = router;

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/residents", require("./routes/residentRoutes"));
app.use("/api/facilities", require("./routes/facilityRoutes"));
app.use("/api/billing", require("./routes/billingRoutes"));
app.use("/api/announcements", require("./routes/announcementRoutes"));
app.use("/api/complaints", require("./routes/complaintRoutes"));
app.use("/api/parking", require("./routes/parkingRoutes"));
app.use("/api/security", require("./routes/securityRoutes"));
app.use("/api/analytics", require("./routes/analyticsRoutes"));
app.use("/api/rentals", require("./routes/rentalRoutes"));
app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/location", require("./routes/locationRoutes"));

// Default Route
app.get("/", (req, res) => {
  res.send("🏠 Welcome to Sweet Stay Residency API!");
});

module.exports = app;

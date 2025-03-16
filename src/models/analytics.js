const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Analytics = sequelize.define("Analytics", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  module: { type: DataTypes.STRING, allowNull: false }, // e.g., "billing", "security", "facility"
  metric: { type: DataTypes.STRING, allowNull: false }, // e.g., "total_revenue", "total_visitors"
  value: { type: DataTypes.FLOAT, allowNull: false }, // e.g., 5000 (for total revenue)
  recordedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = Analytics;

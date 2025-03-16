const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const SecurityLog = sequelize.define("SecurityLog", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  residentId: { type: DataTypes.INTEGER, allowNull: true },
  visitorName: { type: DataTypes.STRING, allowNull: false },
  visitorContact: { type: DataTypes.STRING, allowNull: false },
  purpose: { type: DataTypes.STRING, allowNull: false },
  checkInTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  checkOutTime: { type: DataTypes.DATE, allowNull: true }
});

module.exports = SecurityLog;

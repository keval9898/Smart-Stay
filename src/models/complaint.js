const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Complaint = sequelize.define("Complaint", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  residentId: { type: DataTypes.INTEGER, allowNull: false },
  subject: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  status: { 
    type: DataTypes.ENUM("Pending", "In Progress", "Resolved"), 
    defaultValue: "Pending" 
  },
  dateSubmitted: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = Complaint;

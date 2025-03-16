const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Announcement = sequelize.define("Announcement", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  datePosted: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  postedBy: { type: DataTypes.STRING, allowNull: false }, 
});

module.exports = Announcement;

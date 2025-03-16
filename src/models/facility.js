const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Facility = sequelize.define("Facility", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: true },
  status: { type: DataTypes.ENUM("available", "unavailable"), allowNull: false, defaultValue: "available" },
});

module.exports = Facility;

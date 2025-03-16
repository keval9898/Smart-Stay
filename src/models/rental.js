const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Rental = sequelize.define("Rental", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  apartmentId: { type: DataTypes.INTEGER, allowNull: false },
  tenantId: { type: DataTypes.INTEGER, allowNull: false },
  startDate: { type: DataTypes.DATE, allowNull: false },
  endDate: { type: DataTypes.DATE, allowNull: false },
  rentAmount: { type: DataTypes.FLOAT, allowNull: false },
  status: { 
    type: DataTypes.ENUM("active", "pending", "terminated"), 
    defaultValue: "pending"
  }
});

module.exports = Rental;

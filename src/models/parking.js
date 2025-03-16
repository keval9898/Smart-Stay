const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Parking = sequelize.define("Parking", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  residentId: { type: DataTypes.INTEGER, allowNull: false },
  vehicleNumber: { type: DataTypes.STRING, allowNull: false, unique: true },
  vehicleType: { type: DataTypes.ENUM("Car", "Bike", "Truck"), allowNull: false },
  parkingSlot: { type: DataTypes.STRING, allowNull: false, unique: true },
  status: { 
    type: DataTypes.ENUM("Active", "Inactive"), 
    defaultValue: "Active" 
  }
});

module.exports = Parking;

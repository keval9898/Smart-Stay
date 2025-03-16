const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const LocationService = sequelize.define("LocationService", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  latitude: { type: DataTypes.FLOAT, allowNull: false },
  longitude: { type: DataTypes.FLOAT, allowNull: false },
  address: { type: DataTypes.STRING, allowNull: false },
  type: { 
    type: DataTypes.ENUM("apartment", "park", "shopping_mall", "hospital", "school"),
    allowNull: false 
  }
});

module.exports = LocationService;

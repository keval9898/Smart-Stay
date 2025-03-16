const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./user");

const Resident = sequelize.define("Resident", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER, allowNull: false, references: { model: "Users", key: "id" } },
  apartmentNumber: { type: DataTypes.STRING, allowNull: false },
  phoneNumber: { type: DataTypes.STRING, allowNull: false },
});

Resident.belongsTo(User, { foreignKey: "userId" });

module.exports = Resident;

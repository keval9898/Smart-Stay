const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Resident = require("./resident");

const Bill = sequelize.define("Bill", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  residentId: { 
    type: DataTypes.INTEGER, 
    allowNull: false, 
    references: { model: Resident, key: "id" } 
  },
  amount: { type: DataTypes.FLOAT, allowNull: false },
  dueDate: { type: DataTypes.DATE, allowNull: false },
  status: { type: DataTypes.ENUM("pending", "paid", "overdue"), defaultValue: "pending" },
  paymentMethod: { type: DataTypes.STRING, allowNull: true },
});

module.exports = Bill;

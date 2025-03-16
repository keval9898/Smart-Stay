const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Event = sequelize.define("Event", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  organizer: { type: DataTypes.STRING, allowNull: false },
  maxAttendees: { type: DataTypes.INTEGER, allowNull: false },
  attendeesCount: { type: DataTypes.INTEGER, defaultValue: 0 },
  status: { 
    type: DataTypes.ENUM("upcoming", "ongoing", "completed"), 
    defaultValue: "upcoming" 
  }
});

module.exports = Event;

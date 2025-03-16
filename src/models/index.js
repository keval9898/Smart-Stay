const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db");

const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  logging: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Load Models
db.User = require("./user.model")(sequelize, Sequelize);
db.Resident = require("./resident.model")(sequelize, Sequelize);
db.Facility = require("./facility.model")(sequelize, Sequelize);
db.Booking = require("./booking.model")(sequelize, Sequelize);
db.Bill = require("./bill.model")(sequelize, Sequelize);
db.Announcement = require("./announcement.model")(sequelize, Sequelize);
db.Complaint = require("./complaint.model")(sequelize, Sequelize);
db.Parking = require("./parking.model")(sequelize, Sequelize);
db.SecurityLog = require("./securityLog.model")(sequelize, Sequelize);
db.Analytics = require("./analytics.model")(sequelize, Sequelize);
db.Rental = require("./rental.model")(sequelize, Sequelize);
db.Event = require("./event.model")(sequelize, Sequelize);
db.LocationService = require("./locationService.model")(sequelize, Sequelize);

// Define Relationships
db.User.hasMany(db.Resident, { foreignKey: "userId", onDelete: "CASCADE" });
db.Resident.belongsTo(db.User, { foreignKey: "userId" });

db.Facility.hasMany(db.Booking, { foreignKey: "facilityId", onDelete: "CASCADE" });
db.Booking.belongsTo(db.Facility, { foreignKey: "facilityId" });

db.User.hasMany(db.Complaint, { foreignKey: "userId", onDelete: "CASCADE" });
db.Complaint.belongsTo(db.User, { foreignKey: "userId" });

db.Resident.hasMany(db.Parking, { foreignKey: "residentId", onDelete: "CASCADE" });
db.Parking.belongsTo(db.Resident, { foreignKey: "residentId" });

db.User.hasMany(db.Bill, { foreignKey: "userId", onDelete: "CASCADE" });
db.Bill.belongsTo(db.User, { foreignKey: "userId" });

db.User.hasMany(db.Event, { foreignKey: "organizerId", onDelete: "CASCADE" });
db.Event.belongsTo(db.User, { foreignKey: "organizerId" });

// Sync Database
db.sequelize
  .sync({ alter: true }) // This will create the tables automatically
  .then(() => console.log("✅ Database synced successfully!"))
  .catch((err) => console.error("❌ Database sync error:", err));

module.exports = db;

const http = require("http");
const app = require("./src/app");
const db = require("./src/models");

const PORT = 8000;

const server = http.createServer(app);

// Sync Database and Start Server
db.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("✅ Database synced successfully.");
    server.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database sync failed:", err);
  });

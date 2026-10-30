import { connectDatabase } from "./config/database.js";
import app from "./app.js";
import { seedAdminFromEnvironment } from "./controllers/authController.js";

const port = Number(process.env.PORT || process.env.API_PORT || 4000);
connectDatabase().then(seedAdminFromEnvironment).then(() => app.listen(port, () => console.log(`IshConnect admin API listening on :${port}`)))
  .catch(error => { console.error("API startup failed:", error.message); process.exit(1); });

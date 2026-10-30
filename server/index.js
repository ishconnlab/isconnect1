import { connectDatabase } from "./config/database.js";
import app from "./app.js";

const port = Number(process.env.API_PORT || 4000);
connectDatabase().then(() => app.listen(port, () => console.log(`IshConnect admin API listening on :${port}`)))
  .catch(error => { console.error("API startup failed:", error.message); process.exit(1); });

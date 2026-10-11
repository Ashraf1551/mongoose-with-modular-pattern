import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const config = {
  DB_URL: process.env.URI,
  PORT: process.env.PORT,
};

export default config;

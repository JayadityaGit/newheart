import { config } from "dotenv";
import { cors } from "hono/cors";

config();

// Temporary relaxed CORS configuration to avoid issues
const corsConfig = cors({
  origin: "*", // Allow all origins
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allow all HTTP methods
  allowHeaders: ["Content-Type", "Authorization"], // Allow common headers
  maxAge: 86400, // Cache the preflight response for a day (24 hours)
  credentials: false, // Disable credentials for simplicity
});

export default corsConfig;

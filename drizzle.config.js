import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials:{
    url:'postgresql://neondb_owner:npg_q3QdpsvK9PSe@ep-hidden-fire-ab7zlfhj-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
  }
});

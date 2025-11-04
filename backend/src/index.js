import app from "./app.js";
import express from "express";
import dotenv from 'dotenv';
import path from "path";
import { ENV } from "./lib/env.js";

dotenv.config();

const __dirname = path.resolve();

// make ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

const PORT = ENV.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
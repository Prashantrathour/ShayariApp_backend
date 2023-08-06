// app.js
const express = require("express");
const cors=require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(express.json());
app.use(cors())
// Connect to MongoDB


// Routes
const shayariRoutes = require("./routes/shayariRoutes");
const { config } = require("./config/db");
app.use("/shayari", shayariRoutes);

// Start the server
app.listen(PORT, async() => {
  try {
    config
    console.log("Starting")
  } catch (error) {
    
  }
  console.log(`Server running on http://localhost:${PORT}`);
});

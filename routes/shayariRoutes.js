// routes/shayariRoutes.js
const express = require("express");
const router = express.Router();
const shayariController = require("../controllers/shayariController");

// Route for generating shayari
router.post("/generate", shayariController.generateShayari);
router.get("/history", shayariController.shayarihistory);

module.exports = router;

const express = require("express");
const router = express.Router();
const axios = require("axios");

const Contests = require("./models/contests.js");

const { processContests } = require("./contestUpdation/contestServices");


router.get("/", async (req, res) => {
  try {
    const contests = await processContests();
    res.json(contests);
  } catch (error) {
    console.error("Contest fetch failed:", error);
    res.status(500).json({ error: "Failed to load contests" });
  }
}); 



module.exports = router;

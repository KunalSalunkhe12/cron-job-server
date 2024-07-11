const express = require("express");
const axios = require("axios");
const cron = require("node-cron");

const app = express();
const PORT = process.env.PORT || 3000;

const accredianServer = "https://accredian-backend-task-iohc.onrender.com";

const getReferralsAccredian = async () => {
  try {
    const response = await axios.get(accredianServer + "/referrals");
    console.log(`Ping successful: ${response}`);
  } catch (error) {
    console.error(`Error pinging server: ${error.message}`);
  }
};

// cron.schedule("*/15 * * * *", getReferralsAccredian);
cron.schedule("*/5 * * * * *", getReferralsAccredian);

app.get("/", (req, res) => {
  res.send("Cron Server is running!");
});

app.listen(PORT, () => {
  console.log("Server is running on port, " + PORT);
});

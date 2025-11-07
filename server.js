const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.static(__dirname)); // index.html serve করবে

// এখানে পরে তোমার Render Link বসাবে
const url = "https://YOUR-RENDER-URL.onrender.com"; 

// প্রতি 2 মিনিটে নিজেকে ping করবে যাতে sleep না হয়
setInterval(() => {
  axios.get(url).catch(() => {});
}, 2 * 60 * 1000); // 2 minutes

app.listen(process.env.PORT || 3000, () => {
  console.log("✅ Server Running & Auto-Ping Enabled (Every 2 Min)");
});

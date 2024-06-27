const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

dotenv.config();
app.use(cors());

app.get("/cotacaoBitcoin", async (req, res) => {
  try {
    const BASE_URL = "https://pro-api.coinmarketcap.com";
    const ENDPOINT = "/v1/cryptocurrency/listings/latest";
    const PATH = `${BASE_URL}${ENDPOINT}`;

    const RESPONSE = await axios.get(PATH, {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.API_KEY,
      },
      params: {
        start: "1",
        limit: "5",
        convert: "USD",
      },
    });

    res.json(RESPONSE.data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3000, () => {
  console.log("Proxy server is running on http://localhost:3000");
});

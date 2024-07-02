const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

dotenv.config();
app.use(cors());
const BASE_URL = "https://pro-api.coinmarketcap.com";


app.get("/cotacaoBitcoin", async (req, res) => {
  try {
    const ENDPOINT = "/v2/tools/price-conversion?amount=1&convert=USD&id=1";
    const PATH = `${BASE_URL}${ENDPOINT}`;

    const RESPONSE = await axios.get(PATH, {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.API_KEY,
      }
    });

    res.json(RESPONSE.data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/cotacaoReal", async (req, res) => {
  try {
    const ENDPOINT = "/v2/tools/price-conversion?amount=1&symbol=USD&convert=BRL";
    const PATH = `${BASE_URL}${ENDPOINT}`;

    const RESPONSE = await axios.get(PATH, {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.API_KEY,
      }
    });

    res.json(RESPONSE.data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
})
app.listen(3000, () => {
  console.log("Proxy server is running on http://localhost:3000");
});

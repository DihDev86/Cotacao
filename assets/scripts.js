// Constants:
const usdInput = document.querySelector("#usd"); // # -> ID | . -> classe
const brlInput = document.querySelector("#brl");
const btcInput = document.querySelector("#btc");
const btnAttCotacoesEl = document.querySelector("#attCotacoes");
const USD_TO_BRL = "usd-to-brl";
const BRL_TO_USD = "brl-to-usd";
const BTC_TO_USD = "btc-to-usd";
const USD_TO_BTC = "usd-to-btc";
const BTC_TO_BRL = "btc-to-blr";

// Variables:
let cotacaoDolar = 0;
let cotacaoBitcoin = 0;

// Event Listeners:
document.addEventListener("DOMContentLoaded", (event) => {
  atualizaCotacoes();
});

btcInput.addEventListener("keyup", () => {
  convert(BTC_TO_USD);
  convert(USD_TO_BRL);
});

usdInput.addEventListener("keyup", () => {
  convert(USD_TO_BTC);
  convert(USD_TO_BRL);
});

brlInput.addEventListener("keyup", () => {
  convert(BRL_TO_USD);
  convert(BTC_TO_BRL);
});

usdInput.addEventListener("blur", () => {
  usdInput.value = formatCurrency(usdInput.value);
});

brlInput.addEventListener("blur", () => {
  brlInput.value = formatCurrency(brlInput.value);
});

btcInput.addEventListener("blur", () => {
  btcInput.value = formatCurrency(btcInput.value);
});

btnAttCotacoesEl.addEventListener("click", () => {
  atualizaCotacoes();
});

// Functions:
function convert(type) {
  if (type == USD_TO_BRL) {
    const fixedValue = fixValue(usdInput.value);
    let result = fixedValue * cotacaoDolar;

    result = result.toFixed(2);

    brlInput.value = formatCurrency(result, false);
  } else if (type == BRL_TO_USD) {
    const fixedValue = fixValue(brlInput.value);
    let result = fixedValue / cotacaoDolar;

    result = result.toFixed(2);

    usdInput.value = formatCurrency(result, false);
  } else if (type == BTC_TO_USD) {
    const fixedValue = fixValue(btcInput.value);
    let result = fixedValue * cotacaoBitcoin;

    result = result.toFixed(2);

    usdInput.value = formatCurrency(result, false);
  } else if (type == USD_TO_BTC) {
    const fixedValue = fixValue(usdInput.value);
    let result = fixedValue / cotacaoBitcoin;

    result = result.toFixed(8);

    btcInput.value = formatCurrency(result, true);
  } else if (type == BTC_TO_BRL) {
    const fixedValue = fixValue(brlInput.value);
    let result = fixedValue / (cotacaoBitcoin * cotacaoDolar);

    result = result.toFixed(8);

    btcInput.value = formatCurrency(result, true);
  }
}

function formatCurrency(value, isBTC) {
  const fixedValue = fixValue(value);
  const options = {
    useGrouping: false,
    minimumFractionDigits: isBTC ? 8 : 2, // in case of BTC conversion, use 8 decimal digits.
  };
  const formatter = new Intl.NumberFormat("pt-BR", options);

  return formatter.format(fixedValue);
}

function fixValue(value) {
  const fixValue = value.replace(",", ".");
  const floatValue = parseFloat(fixValue);

  if (isNaN(floatValue)) return 0;

  return floatValue;
}

async function atualizaCotacoes() {
  try {
    const BASE_URL = "http://localhost:3000";
    let response;

    response = await fetch(`${BASE_URL}/cotacaoBitcoin`);

    if (!response.ok) throw new Error(`HTTP status code: ${response.status}`);

    response = await response.json();

    cotacaoBitcoin = response.data.quote.USD.price;

    response = await fetch(`${BASE_URL}/cotacaoReal`);

    if (!response.ok) throw new Error(`HTTP status code: ${response.status}`);

    response = await response.json();

    cotacaoDolar = response.data[0].quote.BRL.price;

    console.log("Cotações atualizadas. =)");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

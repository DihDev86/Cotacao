const cotacaoDolar = 5.52;
const usdInput = document.querySelector("#usd"); // # -> ID | . -> classe
const brlInput = document.querySelector("#brl");
const USD_TO_BRL = "usd-to-brl";
const BRL_TO_USD = "brl-to-usd";

usdInput.addEventListener("keyup", () => {
  convert(USD_TO_BRL);
});

brlInput.addEventListener("keyup", () => {
  convert(BRL_TO_USD);
});

usdInput.addEventListener("blur", () => {
  usdInput.value = formatCurrency(usdInput.value);
});

brlInput.addEventListener("blur", () => {
  brlInput.value = formatCurrency(brlInput.value);
});

// Funções
function convert(type) {
  if (type == USD_TO_BRL) {
    const fixedValue = fixValue(usdInput.value);
    let result = fixedValue * cotacaoDolar;

    result = result.toFixed(2);

    brlInput.value = formatCurrency(result);

  } else if (type == BRL_TO_USD) {
    const fixedValue = fixValue(brlInput.value);
    let result = fixedValue / cotacaoDolar;

    result = result.toFixed(2);

    usdInput.value = formatCurrency(result);
  }
}

function formatCurrency(value) {
  const fixedValue = fixValue(value);
  const options = {
    useGrouping: false,
    minimumFractionDigits: 2,
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

async function fecthAPI() {
  try {
    const BASE_URL = "http://localhost:3000";
    const ENDPOINT = "/cotacaoBitcoin";

    const response = await fetch(`${BASE_URL}${ENDPOINT}`);

    if (!response.ok) throw new Error(`HTTP status code: ${response.status}`);

    const data = await response.json();

    console.log("Data from Express API:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

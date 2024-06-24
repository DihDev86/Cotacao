const cotacaoDolar = 5.43
const usdInput = document.querySelector("#usd")
const brlInput = document.querySelector("#brl")
const USD_TO_BRL = "xxx"
const BRL_TO_USD = "yyy"

usdInput.addEventListener("blur", () => {
    convert(USD_TO_BRL)
})


brlInput.addEventListener("blur", () => {
    convert(BRL_TO_USD)
})


// Funções
function convert(type) {
    const fixedValue = fixValue(usdInput.value)
    let result = fixedValue * dolar
    result = result.toFixed(2)
    if (type == USD_TO_BRL) {

        brlInput.value = formatCurrency(result)

    }

    else if (type == BRL_TO_USD) {
        const fixedValue = fixValue(brlInput.value)
        let result = fixedValue / dolar
        result = result.toFixed(2)

        usdInput.value = formatCurrency(result)

    }
}

function formatCurrency(value) {
    const fixedValue = fixValue(value)
    const options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }
    const formatter = new Intl.NumberFormat("pt-BR", options)

    return formatter.format(fixedValue)
}

function fixValue(value) {
    const fixValue = value.replace(",", ".")
    const floatValue = parseFloat(fixValue)

    if (isNaN(floatValue))
        return 0

    return floatValue
}

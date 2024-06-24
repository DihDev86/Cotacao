const cotacaoDolar = 5.43
const usdInput = document.querySelector("#usd")
const brlInput = document.querySelector("#brl")

usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value)
})


brlInput.addEventListener("blur", () => {
    brlInput.value = formatCurrency(brlInput.value)
})


// Funções
function convert(type) {
    if (type == "usd-to-brl") {
        // ajustar o valor
        // converter o valor
        // mostrar no campo de real

    }

    else if (type == "brl-to-usd") {
        // ajustar o valor
        // converter o valor
        // mostrar no campo de dolar

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

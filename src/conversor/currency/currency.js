function converterMoeda() {
  var real = document.getElementById('valorReal').value
  var dolar = real / 4.92 // Cotação do Dólar na data corrente
  var euro = real / 5.25 // Cotação do Euro na data corrente

  document.getElementById('valorDolar').textContent = `US$${dolar.toFixed(2)}`
  document.getElementById('valorEuro').textContent = `€${euro.toFixed(2)}`
}

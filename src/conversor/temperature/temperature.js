function converterTemperatura() {
  var celsius = document.getElementById('celsiusTemp').value
  var fahrenheit = (celsius * 9 / 5) + 32
  var kelvin = (1 * celsius + 273.15)

  document.getElementById('fahrenheitTemp').textContent = `${fahrenheit.toFixed(2)}°F`
  document.getElementById('kelvinTemp').textContent = `${kelvin.toFixed(2)}K`
}

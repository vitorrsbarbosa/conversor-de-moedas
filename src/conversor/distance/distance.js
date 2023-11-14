function converterDistancia() {
  lightYearRead = document.getElementById('lightYear').value
  lightYearInKm = 9_500_000_000_000
  km = (1 * lightYearRead * 9_500_000_000_000)
  distanceBetweenPlanetsInLY = 4.3
  distanceBetweenPlanetsInKm = distanceBetweenPlanetsInLY * lightYearInKm

  document.getElementById('km').textContent = `${km}km`
  document.getElementById('distanceBetweenPlanetsInKm').textContent = `${distanceBetweenPlanetsInKm}km`
  document.getElementById('distanceBetweenPlanetsInLY').textContent = `${distanceBetweenPlanetsInLY} Anos-luz`

}

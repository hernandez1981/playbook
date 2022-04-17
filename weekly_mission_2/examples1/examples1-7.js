// Ejemplo 7: Uso de filter para filtrar una lista de elementos
console.log("Filtrando la lista de países mediante Filter")
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland', 'India']
const countriesContainingLand = countries.filter((country) => // esta es una función
  country.includes('land') // indicación para solo filtrar elementos que incluyan "land"
)
console.log("Ejemplo 7: Uso de filter para filtrar una lista de países que tengan terminación en 'land' ")
console.log(countriesContainingLand)

const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))// Buscando países que terminan en "ia"
console.log("Ejemplo 7: Países que terminan en 'ia' ")
console.log(countriesEndsByia)


// Ejemplo 9: Uso del reduce
console.log("Ejemplo de uso de reduce")
const numbers = [1, 2, 3, 4, 5, 6, 7]
const result_of_reduce = numbers.reduce((acc, element) => acc + element, 0) // acc acumula el valor devuelto por una función
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)
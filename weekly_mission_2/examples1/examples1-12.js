// Ejemplo 12: Uso de find en una lista de objetos
console.log("Ejemplo de find en una lista de objetos")

const scores = [
    { name: 'A', score: 95 },
    { name: 'M', score: 200 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
  ]
  
  const score_less_than_80 = scores.find((user) => user.score > 100)// el primer elemento de la lista que encuentre y cumpla la condición es la que se imprimirá.
  console.log("Ejemplo 12. Name score found:" + score_less_than_80.name)
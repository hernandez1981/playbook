// Ejemplo 16: Ordenando una lista de objetos
console.log("Ordenando la lista de edad de menor a mayor")
const users = [
    { name: 'A', age: 150 },
    { name: 'B', age: 50 },
    { name: 'C', age: 100 },
    { name: 'D', age: 22 },
  ]
  
  users.sort((a, b) => { // podemos invocar una función
    
    console.log(a.age,b.age)
    
    if (a.age < b.age) 
        return -1
    if (a.age > b.age) 
        return 1

    return 0
  })
  
  console.log("Ejemplo 16: Ordenando una lista de objetos por la edad")
  console.log(users) // sorted ascending
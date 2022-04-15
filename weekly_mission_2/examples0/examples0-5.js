// Ejemplo 5: Objeto con método que recibe parámetros
console.log("Creando un objeto que reciba parámetros")
const myPet = {
    name: "Lola",
    sayHelloToMyPet: function(yourPet){
      console.log(`${this.name} say's hello to ${yourPet}`)
    }
  }
  
  console.log("Ejemplo 5: Objeto con método que recibe parámetros")
  myPet.sayHelloToMyPet("Niña")
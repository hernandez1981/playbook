// Ejemplo 4: Objeto con métodos
console.log("Creando un objeto con métodos")
const pet = {
    name: "Niña",
    age: 2,
    // Esta es una función que se guarda como propiedad
    sayHello: function(){
      // this.name hace referencia a la propiedad del objeto
      console.log(`Hola, me llamo ${this.name} y tengo la edad de ${this.age} años`)
    }
  }
  
  console.log("Ejemplo 4: Objeto con métodos")
  pet.sayHello()
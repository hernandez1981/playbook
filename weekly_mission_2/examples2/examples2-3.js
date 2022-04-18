// Ejemplo 3: Instanciar un objeto con atributos
console.log("Ejemplo de instanciar un objeto con atributos")
class Student {
    // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
    constructor(name, age, subjects){
      this.name = name
      this.age = age
      this.subjects = subjects
      }
  }

  const porfirio = new Student("Porfirio", 38, "Programador");
  console.log(porfirio);
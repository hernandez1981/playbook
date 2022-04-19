// Ejemplo 6: Getters para acceder a los atributos del objeto

class Ajolonauta {
    constructor(name, age, stack){
        this.name = name
        this.age = age
        this.stack = stack
        this.exercises_completed = 10
        this.exercises_todo = 99
    }
  
    // Podemos acceder a los atributos de esta clase
    get getExercisesCompleted() {
        return this.exercises_completed        
    }

    get getName() {
        return this.name
    }
  }
  
  console.log("Ejemplo 6: Getters para acceder a los atributos del objeto")
  const woopa = new Ajolonauta("Katyhernández", 1, [])
//   console.log(woopa.getExercisesCompleted)
console.log(woopa.getName)
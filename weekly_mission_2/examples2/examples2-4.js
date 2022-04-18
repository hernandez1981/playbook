// Ejemplo 4: Métodos en los objetos
class Repository {
    constructor(name, author, language, stars){
     this.name = name
     this.author = author
     this.language = language
     this.stars = stars
    }
  
    getInfo(){ // es una función que ejecutará cualquier objeto instanciado de esta clase
      return `Repository ${this.name} de ${this.author} aprendiendo ${this.language} al ${this.stars}%`
    }
  }
  console.log("Ejemplo 4: Métodos en los objetos")
  const myRepo = new Repository("LaunchX", "katyhernández", "js", 100)
  console.log(myRepo.getInfo())
  
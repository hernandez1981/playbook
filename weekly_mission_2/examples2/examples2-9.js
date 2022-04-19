/*
HERENCIA: Nos permite relacionar clases entre sí y rehusar sus componentes
*/

// Ejemplo  9: Herencia entre dos clases
class Developer {
    constructor(name, mainLang, stack){
      this.name =  name
      this.mainLang = mainLang
      this.stack = stack
    }
  
    get getName() {
        return this.name
      }

    get getMainlang() {
        return this.mainLang
    }

    get getStack() {
        return this.stack
    }
 
    
  }
  
  console.log("Ejemplo  9: Herencia entre dos clases")
  const katyDev = new Developer("Katy", "js", ["Python", "Vue", "Angular"])
  console.log(katyDev)
  
  // Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
  // Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
  class LaunchXStudent extends Developer{
  }
  
  const katyLaunchXDev = new LaunchXStudent("Katy", "js", ["Python", "Vue", "Angular"]);
  console.log(katyLaunchXDev);
  console.log(katyLaunchXDev.getName) // getter de la clase padre rehusada en la clase hija
  console.log(katyLaunchXDev.getMainlang);
  console.log(katyLaunchXDev.getStack);
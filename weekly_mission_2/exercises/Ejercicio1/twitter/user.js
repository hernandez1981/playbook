const user = {
    user: "Katy Hernández",
    username: "katyhernandez",
    biography: "chiapas",
    age: 30,
    status:1,
    register: new Date(),        
   
    getGeneralInfo: function(){
      return `Esta cuenta es de ${this.user} creado ${this.register}`
    }
   }   
   
   console.log("Nombre del usuario:" + user.username)
   console.log(user.getGeneralInfo())
   
//Modelando información de facebook objeto User.
console.log("Modelando información de facebook: objeto User")

const user = {
    user: "Katy Hernández",
    username: "katyhernandez",
    biography: "Tomando curso de Backend node JS en LaunchX",
    Live:" Sinaloa",
    birthday: 23-04-2000,
    status:1,  
    gender: "genero",
    timeline:"2015",
    about: "Acerca de mi",
    friends:"Amigos",
    photos:"mis fotos",
    archive: "mis archivos",
    more:"otras actividades",
    story: "mis historias",
    register: new Date(), 

    getGeneralInfo: function(){
      return `Cuenta de ${this.user}, creado: ${this.register}`
    }
   }   
   
   console.log("Nombre del usuario:" + user.user)
   console.log(user.getGeneralInfo())

   

    
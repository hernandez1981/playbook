//Modelando información de facebook objeto User.
console.log("Modelando información de facebook: objeto User")

const user = {
  user: "Katy Hernández",
  username: "katyhernandez",
  photo: "imagen perfil",
  timeline: "Estudiante de LaunchX",
  Live:" Sinaloa",
  birthday:new Date(),
  status:1,  
  gender: "genero",   
  about: "Acerca de mi",
  friends:"Amigos",
  photos:"mis fotos",
  archive: "mis archivos",
  more:"otras actividades",
  story: "mis historias",
  register: new Date(), 
  getGeneralInfo: function(){
    return `Cuenta de ${this.user}, creado: ${this.register.toLocaleDateString()}`
  }
}   
  
  console.log("Nombre del usuario:" + user.user)
  console.log(user.getGeneralInfo())

   

    
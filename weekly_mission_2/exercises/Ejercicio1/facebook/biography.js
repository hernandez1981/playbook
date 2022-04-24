//Modelando información de facebook objeto biography.
console.log("Modelando información de facebook: objeto Biography.")
const biography = {
    user: "Katy Hernández", 
    photo: "imagen perfil",
    timeline: "Estudiante de programación de LaunchX",
    about: "Acerca de mi",
    live: "Sinaloa",  
    updateInfo: new Date(), 
    activityLog: 5,
    friends: 100, 
    status: 1,
    getGeneralInfo: function(){
        return `Biografía de ${this.user} es ${this.timeline}, vive en ${this.live}, la biografía reciente es de ${this.updateInfo.toLocaleDateString()}`
    }  
}

console.log("Nombre del usuario:" + biography.user)
console.log(biography.getGeneralInfo())

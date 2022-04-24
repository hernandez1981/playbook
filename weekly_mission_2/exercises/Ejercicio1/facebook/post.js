//Modelando información de facebook objeto Post.
console.log("Modelando información de facebook: objeto Post.")
   const post = {
        user: "Katy Hernández",    
        publication: "Curso Node JS",
        dateCreated: new Date(),                        
        like:100,       
        comment:50,
        share: 200,
        getGeneralInfo: function(){
            return `Post:${this.publication} por ${this.user}, publicado:${this.dateCreated.toLocaleString()}`
        }   
    }

    console.log("Nombre del usuario:" + post.user)
    console.log(post.getGeneralInfo())



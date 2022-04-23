//Modelando información con objetos simples de JS: ejemplo objeto pullRequest.
console.log("Probando si funciona!!!!")

const pullRequest = {
    title: "my_launchx_blog",
    branchName: "hernandez1981",
    dateCreated: new Date(),
    status: "Activo",
    repositoryNameAssociated: "Blog Personal",    
    getStatus: function(){
      return `El status actual del pull request esta ${this.status} llamado: ${this.repositoryNameAssociated}`
    },
    getTitleAndAutor: function(){
      return `Este pull request fue realizado por ${this.branchName} con el titulo: ${this.title}`
    }
   }
   
   console.log("Nombre del pull-request:" + pullRequest.title)
   console.log("Nombre del repositorio asociado: " + pullRequest.repositoryNameAssociated)
   console.log(pullRequest.getTitleAndAutor())
   console.log(pullRequest.getStatus())
   
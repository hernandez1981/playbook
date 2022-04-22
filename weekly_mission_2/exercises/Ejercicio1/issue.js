//Modelando información con objetos simples de JS: ejemplo objeto issue.
console.log("Probando si funciona!!!!")

const issue = {
    title: "LaunchX",
    repositoryNameAssociated: "playbook",
    status: "Activo",
    numberOfComments: 10,
    labels: 3,
    author: "katyhernández",
    dateCreated: new Date(),
    lastUpdated: new Date(), 
    getTitleAndAuthor: function(){
      return `${this.title} by ${this.author}` 
    },
    getGeneralInfo: function(){
      return `This issue ${this.title} was created ${this.dateCreated.toLocaleDateString()} by ${this.repositoryNameAssociated},last updated ${this.lastUpdated}`
    }
   }
   
   console.log("Nombre del issue:" + issue.title)
   console.log("Issues creado:" + issue.dateCreated.toLocaleDateString())
   console.log(issue.getTitleAndAuthor())
   console.log(issue.getGeneralInfo())
   
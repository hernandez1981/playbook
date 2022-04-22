```mermaid
 classDiagram
 class Repo
 Repo : +name
 Repo : +author
 Repo : +language
 Repo : +numberOfCommits
 Repo : +stars
 Repo : +forks
 Repo : +issues_open
 Repo : +issues_close
 Repo : +getTotalIssues()
 Repo : +getGeneralInfo()
 ```

//Modelando información con objetos simples de JS: ejemplo objeto repo.
console.log("Probando si funciona")

const repo = {
    name: "playbook",
    author: "katyhernández",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 20,
    forks: 4,
    issues_open: 3,
    issues_close: 3,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repositorio:" + repo.name)
   console.log("Lenguaje que estoy aprendiendo: " + repo.language)
   console.log("Número de commits: " + repo.numberOfCommits)
   console.log("Iniciado: " + repo.stars)
   console.log("Forks realizados: " + repo.forks)
   console.log("Issues totales: " + repo.getTotalIssues())
  
   console.log(repo.getGeneralInfo())
   

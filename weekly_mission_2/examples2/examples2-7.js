// Ejemplo 7: Setters para modificar los atributos del objeto
class MissionCommander {
    constructor(name, mission){
        this.name = name
        this.mission = mission
        this.students = 0
        this.lives = 0
    }

    get getName() {
        return this.name
    }

    get getMission() {
        return this.mission
    }
  
    get getStudents(){
     return this.students
    }
  
    get getLives(){
     return this.lives
    }

    set setName(name) {
        this.name = name
    }

    set setMission(mission) {
        this.mission = mission
    }
  
    set setStudents(students){
      this.students = students
    }
  
    set setLives(lives){
      this.lives = lives
    }
  }
  
  console.log("Ejemplo 7: Setters para modificar los atributos del objeto")
  const missionCommanderNode = new MissionCommander("Carlo", "NodeJS")
  
  console.log(missionCommanderNode.getName)// Carlo por default
  console.log(missionCommanderNode.getMission)// NodeJS por default
  console.log(missionCommanderNode.getStudents) // 0 por default
  console.log(missionCommanderNode.getLives)// 0 por default
  
  
  // actualizamos los atributos por medio de los setters
  missionCommanderNode.setName = 'Katy'
  missionCommanderNode.setMission = 'JS'
  missionCommanderNode.setStudents = 250
  missionCommanderNode.setLives = 7
  
  console.log(missionCommanderNode.getName) // Katy nueva información colocada
  console.log(missionCommanderNode.getMission) //  JS nueva información colocada
  console.log(missionCommanderNode.getStudents) // 250 nuevo dato colocado
  console.log(missionCommanderNode.getLives)//  7 nuevo dato colocada
  
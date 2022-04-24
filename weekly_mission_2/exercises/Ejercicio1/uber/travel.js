//Modelando información de uber objeto Travel.
console.log("Modelando información de Uber: objeto Travel.")
const travel = {
    totalTrip: 1,          
    totalDistance: 1.15,
    timeOnline: 45, 
    origin: "Trabajo",
    destination:"Casa",
    price: 100,
    typePay: "efectivo",
    clientId: 10,
    userId: 1,  
    getGeneralInfo: function(){
         return `Total de distancia recorrida ${this.totalDistance} km, precio $${this.price} y la forma de pago es ${this.typePay}`
    }   
 }

 console.log("Inicio del viaje:" + travel.origin)
 console.log("Destino del viaje:" + travel.destination) 
 console.log(travel.getGeneralInfo())


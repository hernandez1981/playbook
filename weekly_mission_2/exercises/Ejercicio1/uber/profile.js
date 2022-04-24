//Modelando información de uber objeto profile.
console.log("Modelando información de uber: objeto profile.")
   const profile = {
       id: 1,
       companyName: "Katy Hernández",          
       driverName: "Porfirio López",
       driverPhoto:"front.png",
       carModel: "Mazda",
       carYear: 2008,
       carPlate: "mx20000" ,
       imageCar:"imagen.png",
       rating: 4.9, 
       companyYear: 3,        
       demand:"Alta",       
       typeuser:"uber",
       call: 6688888888,
       email:"katy@hotmail.com",
       getGeneralInfo: function(){
            return `Empresa creado hace ${this.companyYear} años, cuenta con rating ${this.rating} y la demanda es ${this.demand}`
        }   
    }

    console.log("Nombre de la empresa:" + profile.companyName)
    console.log("Nombre del conductor:" + profile.driverName)
    console.log("Foto del conductor:" + profile.driverPhoto)
    console.log("Modelo del carro:" + profile.carModel)  
    console.log("Placa del carro:" + profile.carPlate)
    console.log(profile.getGeneralInfo())



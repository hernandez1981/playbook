const hashtag = {
    id: 300,
    hashtag: "#NoFueUnAccidente #Debanhi #NiUnaMas",    
    dateCreated: new Date(),  
        
    getGeneralInfo: function(){
      return `${this.hashtag}  ${this.dateCreated}`
    }
   }   

   console.log(hashtag.getGeneralInfo())
const trendingTopic = {    
    trendingTopic: "#TodosSomosDebanhi",
    location:"México",
    follow: 1,
    following:100,
    followers:1000,
    retweets:1000,
    like: 1000,
    shared: 3000,
    Comments: [{
        Id:1,
        Comment:"Comments about topic"
    }],
    dateCreated: new Date(),  
        
    getGeneralInfo: function(){
      return `El tema del momento es ${this.trendingTopic} y tiene ${this.followers} seguidores`
    }
   }   

   console.log(trendingTopic.getGeneralInfo())
   
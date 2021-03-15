class Player {
    constructor() {

        this.playerName = null;
        this.index = 0;
        this.distance = 0;
       
    }

    getPlayerCount() {
     
        database.ref('playerCount').on("value",(data)=>{
            playerCount = data.val()
        })
      
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {

       database.ref('players/player' + this.index).update({
           playerName: this.playerName,
           distance: this.distance,
           //playerStatus: "active"
       })
       
    }

    static getPlayerInfo() {
        
        var playerInfo = database.ref("players")
        playerInfo.on("value", (data)=>{
            allPlayers = data.val();
        })
       
    }

    
}

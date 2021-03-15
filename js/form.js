class Form{
    constructor(){
       this.inputBox = createInput("Name")
       this.button = createButton('Play')
       this.greeting = createElement("h2")
       this.reset = createButton("Reset")

    }
    hide() {

        this.button.hide()
        this.inputBox.hide()
        this.greeting.hide()

    }
    display() {
        var title = createElement("h1")
        title.html("Welcome to Fantasy Racing!")
        title.position(displayWidth/2-200,100)
        this.reset.position(displayWidth-70, 10)
        this.inputBox.position(displayWidth/2-100, 300) 
        this.button.position(displayWidth/2-80, 350)
        this.button.mousePressed(()=>{
            this.button.hide()
            this.inputBox.hide()
            player.playerName = this.inputBox.value();
            playerCount+=1;
            player.index = playerCount;
            console.log(player.index)
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello "+player.playerName);
            this.greeting.position(displayWidth/2 -70, displayHeight/4)
        })

        this.reset.mousePressed(()=>{
            game.update(0);
            player.updateCount(0);
            database.ref("/").update({players:null})
        })





    }
}
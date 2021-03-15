class Game{
    constructor(){

    }
    getState() {
      database.ref('gameState').on("value", (data)=>{
          var value = data.val() 
          gameState = value
        })
        
    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
        if(gameState === 0){
            player = new Player()
            form = new Form();

            player.getPlayerCount()
            form.display()
            

        }

        
        player1 = createSprite(100,100,80,100);
        player1.addAnimation("dragon", dragon); 
        player1.addAnimation("dragon2", dragon2)  
        player2 = createSprite(100,100,80,100);
        player2.addAnimation("serpent", serpent)
        player2.scale=0.3
        player2.addAnimation("serpent2", serpent2)
        player3 = createSprite(100,100,80,100);
        player3.addAnimation("unicorn", unicorn)
        player3.scale=0.5
        player3.addAnimation("unicorn2", unicorn2)
        player4 = createSprite(100,100,80,100);
        player4.addAnimation("phoenix", phoenix)
        player4.scale=0.6
        player4.addAnimation("phoenix2", phoenix2)
        players = [player1, player2, player3, player4]
       
        }

       

    
    
    play(){

        form.hide();
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            var index = 0
            var x = -20
            var y = 100
            background("lightGreen")
            //add track image here

            for(var plr in allPlayers){
                index++
                x+=400
                y = height - allPlayers[plr].distance-150
                players[index-1].x=x; 
                players[index-1].y=y;

               
                if(index===player.index){
                    camera.position.x = width/2; 
                    camera.position.y = players[index-1].y;
                    fill("red")
                    strokeWeight(15)
    
                    textAlign(CENTER);
                    textSize(20);
                    var randomNumber = Math.round(random(160,300))
                    var randomX = Math.round(random(20,width-50))
                    if(frameCount%randomNumber === 0){
                        var obstacle = createSprite(randomX, camera.position.y-1000, 100,100);
                        obstacle.addAnimation("rock", rock);
                        obstacle.scale = 0.3;
                        obstacle.velocityY = 2;
                        obstacle.lifetime = height/2;
                        obstacleGroup.add(obstacle);
                        
                    }
                    
                    if(keyDown("right")){
                        console.log(players[index-1])
                        players[index-1].x +=100    
                    }
                    if(keyDown("left")){
                        console.log(players[index-1])
                        players[index-1].x -=100    
                 }
                 fill("red")
                 strokeWeight(15)
                 ellipse(players[index-1].x,y,100,100);
   
                }
                

                textAlign(CENTER);
                textSize(35)
                text(allPlayers[plr].playerName, players[index-1].x,y+150)
                
            }
            function keyReleased(){
                player[index-1].x = x
                /*player1.changeAnimation("dragon", dragon);
                player2.changeAnimation("serpent", serpent)
                player2.scale=0.3
                player3.changeAnimation("unicorn", unicorn); 
                player3.scale=0.5
                player4.changeAnimation("phoenix", phoenix); 
                player4.scale=0.6*/
             }

            if(keyDown(UP_ARROW)){
               player.distance +=10
               player.update()
            }
            

             
             
        }

        
        drawSprites()

    }
        
          
         
         
        
  
        }
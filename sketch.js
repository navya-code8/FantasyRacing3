var database;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var dragon, serpent, unicorn, phoenix;
var dragon2, serpent2, unicorn2, phoneix2; 
var rock, obstacleGroup;
var player, form,game;
var player1,player2, player3, player4;
var players;

var player_img;


function preload(){

  dragon = loadAnimation("Dragon.png");
  serpent = loadAnimation("Serpent.png");
  unicorn = loadAnimation("Unicorn.png");
  phoenix = loadAnimation("Phoenix.png");
  rock = loadAnimation("obstacle.png");

  dragon2 = loadAnimation("LargerDragon.png");
  serpent2 = loadAnimation("LargerSerpent.png");
  unicorn2 = loadAnimation("LargerUnicorn.png");
  phoenix2 = loadAnimation("LargerPhoenix.png");
  //load track img

 

}
function setup() {
  createCanvas(displayWidth, displayHeight*2);
  database = firebase.database();
  game = new Game()
  game.getState();
  game.start();
  obstacleGroup = new Group();
  
}

function draw() {
  background("white")

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    game.play();
  }

  
}
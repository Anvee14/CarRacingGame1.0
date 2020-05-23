class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200,50,50)
    car2 = createSprite(300,200,50,50)
    car3 = createSprite(500,200,50,50)
    car4 = createSprite(700,200,50,50)
    cars = [car1,car2,car3,car4]
  }

  play(){
    form.hide();
    //textSize(30);
  //  text("Game Start", displayWidth/2-100, displayHeight/2-200)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
     // var display_position = displayHeight/2-100;
      var x = 0
      var y = 0
      var index = 0
      
      for(var plr in allPlayers){
        //index  += 1
       // x +=200
       // y = displayHeight-allPlayers[plr].distance
        cars[index-1].x = x
        cars[index-1].y = y
        if(index==player.index){
          cars[index-1].shapeColor = "red"
        }
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
   
    drawSprites()
  }
}

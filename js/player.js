class Player{
    constructor(x,y){
      this.x = x
      this.y = y 
       Ground = createSprite(245,displayHeight-280,displayWidth*2,5)
       Ground.visible =false
        
        player = createSprite(250,displayHeight-370,50,50);
        player.collide(Ground);
        player.scale  = 2
       
        
      
        player.addAnimation("Idle",Idle)
        player.addAnimation("Running",playerRun);
        player.addAnimation("Move1",playerAttack);//FireClaw
        player.addAnimation("Move2",playerAttack2);
        player.addAnimation("Move3",playerAttack3);//FlyClaw
        player.addAnimation("Move4",playerAttack4);//GroundBlade
        player.addAnimation("Move5",playerAttack5);//fireRoll
        player.addAnimation("Move6",playerAttack6);//FireClaw
        player.addAnimation("Move6",playerAttack6);
   
       

  
    }
    Run(){
      player.velocityX= 5
      player.changeAnimation("Running",playerRun);
  }
  FireSword(){
   player.velocityX= 5
    player.changeAnimation("Move6",playerAttack6);
  }
    Stop(){
      player.velocityX = 0
    }
   
    
    GroundFireSword(){
      player.changeAnimation("Move1",playerAttack);

     

      } 
    
    FireRoll(){
      player.changeAnimation("Move5",playerAttack5);
    }
    FlyClaw(){
      player.changeAnimation("Move3",playerAttack3)
    }
    SkyAttack(){
      player.changeAnimation("Move2",playerAttack2);
    }
    IdlePlayer(){
      player.changeAnimation("Idle",Idle)
    }

   

}
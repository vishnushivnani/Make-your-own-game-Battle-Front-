class Tank{
    constructor(x,y){
      this.x = x
      this.y = y
        tank = createSprite(x,y);
       
        tank.addAnimation("tankIdle",Tank_Img);
        tank.addAnimation("Fire",TankFire);
        tank.addAnimation("destroyed",destroy_Img);
        tank.addAnimation("FireInAir",FireInAir_Img1)

        tank.scale = 3
        drawSprites();
    }
    isTouching(object1,object2){
        if (object1.x - object2.x < object2.width/2 + object1.width/2
          && object2.x - object1.x < object2.width/2 + object1.width/2
          && object1.y - object2.y < object2.height/2 + object1.height/2
          && object2.y - object2.y < object2.height/2 + object1.height/2) {
          
          return true;
        }
        else {
          return false;
        } 
      }
      FireInAir(){
        
        tank.changeAnimation("FireInAir",FireInAir_Img1);
       var Bullet  = createSprite(tank.x-50,tank.y-20,10,10);
       Bullet.addImage(Bullet_Img2)
       Bullet.velocityX  = -7;
       Bullet.velocityY  = -5;
       

       }
       Fire(){
         tank.changeAnimation("Fire",TankFire);
         
      
      
      

       }
       destroy(){
         tank.changeAnimation("destroyed",destroy_Img);

       }
       random(){
        var rand = Math.round(random(1,2));
       
        switch(rand) {
          case 1 :tank.Fire();
         
          break;
          case 2 :tank.FireInAir();
          break;

       }
      

}

IdleTank(){
  tank.changeAnimation("tankIdle",Tank_Img);
 }

}
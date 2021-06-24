class Interface{
    constructor(x,y,width,height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        StartButton = createButton("Start");
        StartButton.position(displayWidth/2,displayHeight-200)
     //   StartButton.mousePressed(()=>{
          //  gameState = PLAY;
        //})
      
  
      bg = createSprite(this.x,this.y,this.width*3,this.height*2);
      bg.addImage(SpaceImg);
      bg.scale = 2.5
      bg.visible = true
      
        earth =createSprite(this.x-50,this.y-50,this.width,this.height);
        earth.addAnimation("RotatingEarth",Rearth);
        earth.scale = 4
       
        
        robo = createSprite(this.x-100,this.y-50,this.width*1.5,this.height*1.2);
        robo.addImage(RoboImg)
        robo.scale = 1.5;
     
        gameState = "Interface";
        
    }
    display(){

      
        if(frameCount%150===0){
            aestriod  = createSprite(random(100,205),random(10,400),50,50);
            aestriod.addImage(aestroidImage);
            aestriod.velocityX = 5
            aestriod.velocityY = 5
            aestriod.scale = 0.5
            aestriod.lifetime = 200
          
        }
        if(frameCount%260 === 0){
          
            aestriod2  = createSprite(random(100,605),random(40,50),50,50);
            aestriod2.addImage(aestroidImage);
            aestriod2.velocityX = 5
            aestriod2.velocityY = 5
            aestriod2.scale = 0.5
            aestriod2.lifetime = 200
            
        }
       
        StartButton.mousePressed(() =>{
          // bg.visible = false;
           aestriod.visible = false;
           aestriod2.visible = false;
           gameState = "ShowMap"
           console.log("ok",gameState)
           earth.visible = false;
           robo.visible = false;
           
           StartButton.hide();
          });
   
          

            drawSprites();
        
    }
    hide(){
        aestriod.visible = false;
        aestriod2.visible = false;
        bg.visible = false;
        earth.visible = false;
        robo.visible = false;
        StartButton.hide();
    }
    show(){
        aestriod.visible  = true;
        aestriod2.visible = true;
        this.bg.show()
        earth.visible     = true;
        robo.visible      = true;
        StartButton.show();
        

    }
}
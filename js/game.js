class Game{
    constructor(){

    }
    serve(){
        startScreen  = new Interface(displayWidth/2,displayHeight/2,500,500);
        startScreen.display();
       

    }
    showMapandStory(){
        background(200);
        if(gameState === "ShowMap"){
            console.log("ok")
           }
        
            map  = createSprite(displayWidth/2,displayHeight/2,500,500);
            map.addImage(MapImage)

        

         
            StageScreen = createSprite(displayWidth/2,displayHeight/2,displayWidth*1.5,displayHeight*1.2);
            StageScreen.visible = false;   CancelButton_Icon  = createSprite(950,100,10,10)
            CancelButton_Icon.addImage(CancelButton_Img);
            CancelButton_Icon.visible = false
            CancelButton_Icon.scale = 0.3
            CancelButton = createButton("-");
            CancelButton.style('background','#D73743');
            CancelButton.hide();
            CancelButton.position(940,90);
            Enemy_img = createSprite(displayWidth/2+300,displayHeight/2,20,20);
            Enemy_img.visible = false
            Enemy_img.addImage(Tank_Img);
            Enemy_img.scale = 2.3


            stages = [stage1Button_Icon,stage2Button_Icon,stage3Button_Icon,stage4Button_Icon,stage5Button_Icon]
           
          stage1Button_Icon  = createSprite(550,550,20,20);
          stage1Button_Icon.addImage(UnlockedButton_Img)
          stage1Button_Icon.scale = 0.3
          StageButton1 = createButton("1");
          StageButton1.style('background','#D73743')
          StageButton1.position(538,537);

          StageButton1.mousePressed(()=>
          {
              StageScreen.visible = true
              StageScreen.visibility = 100
              stage1Button_Icon.addImage(stage1_Button_Icon);
              StageButton1.position(displayWidth/2,displayHeight-200);
              stage1Button_Icon.x = displayWidth/2-12
              stage1Button_Icon.y = displayHeight-190
              stage2Button_Icon.visible = false
              stage3Button_Icon.visible = false
              stage4Button_Icon.visible = false
              stage5Button_Icon.visible = false
              CancelButton_Icon.visible = true
              StageScreen.addImage(StageScreen_Img);
              robo = createSprite(displayWidth/2-300,displayHeight/2)
              robo.addImage(RoboImg);
              robo.scale = 0.9
              Enemy_img.visible = true;
            //  Stage1Screen.visible = false
              CancelButton.show();

              
              
              CancelButton.mousePressed(()=>{
                  StageScreen.visible = false
                  stage1Button_Icon.addImage(UnlockedButton_Img);
                  stage1Button_Icon.x = 550
                  stage1Button_Icon.y = 550
                  StageButton1.position(538,537);
                  stage2Button_Icon.visible = true
                  stage3Button_Icon.visible = true
                  stage4Button_Icon.visible = true
                  stage5Button_Icon.visible = true
                  CancelButton_Icon.visible = false
                  robo.visible              = false
                  Enemy_img.visible         = false;
                  CancelButton.hide();
              })
              StageButton1.mousePressed(()=>{

               // map.visible = false
                stage1Button_Icon.visible = false
                StageButton1.hide();
                StageScreen.visible = false
                stage2Button_Icon.visible = false
                stage3Button_Icon.visible = false
                stage4Button_Icon.visible = false
                stage5Button_Icon.visible = false
                CancelButton_Icon.visible = false
                robo.visible              = false
                Enemy_img.visible         = false;
                gameState = PLAY
                CancelButton.hide();
              })
          })
          
           
          stage2Button_Icon  = createSprite(250,400,20,20);
          stage2Button_Icon.addImage(LockedButton_Img);
          stage2Button_Icon.scale = 0.3;
     
          stage3Button_Icon = createSprite(430,300,20,20)
          stage3Button_Icon.addImage(LockedButton_Img);
          stage3Button_Icon.scale = 0.3;
     
          stage4Button_Icon = createSprite(620,250,20,20)
          stage4Button_Icon.addImage(LockedButton_Img);
          stage4Button_Icon.scale = 0.3;
     
          stage5Button_Icon = createSprite(800,350,20,20);
          stage5Button_Icon.addImage(LockedButton_Img);
          stage5Button_Icon.scale  = 0.3
           

           
        drawSprites();
    }
    stage1(){
     
     Stage1Screen = createSprite(width/2,height/2,2000,2000);
     Stage1Screen.addImage(Stage1_Img)
     Stage1Screen.scale = 0.7
    
     var attackButton1 = createButton("Attack1")
         attackButton1.position(width/2,height/2)
         BlueFire = new Player(250,displayHeight-370);
         tanks  = new Tank(displayWidth/2+300,displayHeight-370);
     
      
    
     
      
        attackButton1.mousePressed(()=>{
        BlueFire.GroundFireSword();
        Throw = createSprite(BlueFire.x+80,BlueFire.y-20,20,20);
        Throw.addImage(FireClawThrow_Img);
        Throw.velocityX = 12

        var rand = Math.round(random(1,2));
        switch(rand) {
          case 1 :tanks.Fire();
          Bullet = createSprite(tanks.x-50,tanks.y-20,10,10);
          Bullet.addImage(Bullet_Img);
          Bullet.velocityX = -12
          Bullet.scale = 0.3
                    break;
          case 2 :tanks.Fire();
          Bullet = createSprite(tank.x-50,tank.y-20,10,10);
          Bullet.addImage(Bullet_Img);
          Bullet.velocityX = -12
          Bullet.scale = 0.3
          break;
        }

       
        if(BlueFire.y===displayHeight-370){
            BlueFire.velocityX = 2
        }
       playerState = "Played";
      
    })
    if(playerState!=="Played"){
        
    }
    if(BlueFire.y===displayHeight-370){
        BlueFire.velocityX = 2
    }
    
   
    if(BlueFire.x>=displayWidth/2){
        BlueFire.Stop();
    }
    
    

}
    }
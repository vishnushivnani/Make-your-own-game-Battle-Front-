var player;var playerAttack,playerAttack2,playerAttack3,playerAttack4,playerAttack5,playerAttack6,playerRun;

var Enemy;var EnemyAttack1;

var aestriod,aestroidImage,aestriod2

var earth,Rearth;

var robo,RoboImg

var StartButton
var SERVE = 1
var PLAY  = 2
var gameState = "Stage1"
var Games;

var Exp = 0;
var BlueFire
var startScreen
var SpaceImg,bg;
var stage1Button_Icon

var map,MapImage;
var Stage1_Img
var stage2Button_Icon,stage3Button_Icon,stage4Button_Icon,stage5Button_Icon,stages;
var stage2_Img1,stage2_Img2,stage3_Img1,stage3_Img2,stage4_Img1,stage4_Img2,stage5_Img1,stage5_Img2;

var LockedButton_Img,PassedButton_Img,UnlockedButton_Img;
var StageScreen,StageScreen_Img;
var StageButton1,StageButton2,StageButton3,StageButton4,StageButton5;

var CancelButton_Icon,CancelButton_Img;
var CancelButton;

var Enemy_img,Tank_Img,NinjaRobo_Img,YellowRobo_Img,BloodMan_Img;

var playerState,Throw;

var Stage1Screen;var Ground
var FireClawThrow_Img;

var tank,FireInAir_Img1,Bullet_Img,Bullet_Img2,TankFire,destroy_Img,tanks;

var Bullet

function preload(){

  MapImage = loadImage("Map_img.jpg");

  FireClawThrow_Img = loadImage("Sprites/Images/CharacterFiles/FireClaw/FireClaw(Throw).png")

   playerAttack = loadAnimation("Sprites/Images/CharacterFiles/FireClaw/FireClaw(1).png","Sprites/Images/CharacterFiles/FireClaw/FireClaw(2).png"
  ,"Sprites/Images/CharacterFiles/FireClaw/FireClaw(3).png","Sprites/Images/CharacterFiles/FireClaw/FireClaw(4).png"
  ,"Sprites/Images/CharacterFiles/FireClaw/FireClaw(5).png","Sprites/Images/CharacterFiles/FireClaw/FireClaw(6).png",
  "Sprites/Images/CharacterFiles/FireClaw/FireClaw(6).png","Sprites/Images/CharacterFiles/FireClaw/FireClaw(7).png",
 "Sprites/Images/CharacterFiles/FireClaw/FireClaw(7).png",
  "Sprites/Images/CharacterFiles/FireClaw/FireClaw(7).png", "Sprites/Images/CharacterFiles/FireClaw/FireClaw(7).png");

  playerAttack2 = loadAnimation("Sprites/Images/CharacterFiles/Fly/Fly(1).png","Sprites/Images/CharacterFiles/Fly/Fly(2).png",
  "Sprites/Images/CharacterFiles/Fly/Fly(3).png","Sprites/Images/CharacterFiles/Fly/Fly(4).png",
  "Sprites/Images/CharacterFiles/Fly/Fly(5).png","Sprites/Images/CharacterFiles/Fly/Fly(6).png", 
  "Sprites/Images/CharacterFiles/Fly/Fly(7).png");

  playerAttack3  =loadAnimation("Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(1).png","Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(2).png",
  "Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(2).png","Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(3).png",
  "Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(4).png","Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(5).png",
  "Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(6).png","Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(7).png",
  "Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(8).png","Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(9).png",
  "Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(10).png","Sprites/Images/CharacterFiles/JumpAxe/JumpAxe(11).png");

  playerAttack4  = loadAnimation("Sprites/Images/CharacterFiles/RollSword/RollSword(1).png","Sprites/Images/CharacterFiles/RollSword/RollSword(2).png",
  "Sprites/Images/CharacterFiles/RollSword/RollSword(3).png","Sprites/Images/CharacterFiles/RollSword/RollSword(4).png",
  "Sprites/Images/CharacterFiles/RollSword/RollSword(5).png","Sprites/Images/CharacterFiles/RollSword/RollSword(6).png");

  playerAttack5  = loadAnimation("Sprites/Images/CharacterFiles/Roll/Roll(1).png","Sprites/Images/CharacterFiles/Roll/Roll(2).png",
  "Sprites/Images/CharacterFiles/Roll/Roll(3).png","Sprites/Images/CharacterFiles/Roll/Roll(4).png",
  "Sprites/Images/CharacterFiles/Roll/Roll(5).png","Sprites/Images/CharacterFiles/Roll/Roll(6).png",
  "Sprites/Images/CharacterFiles/Roll/Roll(7).png","Sprites/Images/CharacterFiles/Roll/Roll(8).png");

  playerAttack6 = loadAnimation( "Sprites/Images/CharacterFiles/Walk/Walk(3).png","Sprites/Images/CharacterFiles/Walk/Walk(4).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(5).png","Sprites/Images/CharacterFiles/Walk/Walk(6).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(7).png","Sprites/Images/CharacterFiles/Walk/Walk(8).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(9).png","Sprites/Images/CharacterFiles/Attack 1/Fire(1).png","Sprites/Images/CharacterFiles/Attack 1/Fire(1).png",
  "Sprites/Images/CharacterFiles/Attack 1/Fire(2).png","Sprites/Images/CharacterFiles/Attack 1/Fire(2).png",
  "Sprites/Images/CharacterFiles/Attack 1/Fire(3).png","Sprites/Images/CharacterFiles/Attack 1/Fire(3).png",
  "Sprites/Images/CharacterFiles/Attack 1/Fire(4).png","Sprites/Images/CharacterFiles/Attack 1/Fire(4).png",
  "Sprites/Images/CharacterFiles/Attack 1/Fire(5).png", "Sprites/Images/CharacterFiles/Attack 1/Fire(5).png",
  "Sprites/Images/CharacterFiles/Attack 1/Fire(6).png","Sprites/Images/CharacterFiles/Attack 1/Fire(6).png");

  playerRun = loadAnimation("Sprites/Images/CharacterFiles/Walk/Walk(1).png","Sprites/Images/CharacterFiles/Walk/Walk(2).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(3).png","Sprites/Images/CharacterFiles/Walk/Walk(4).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(5).png","Sprites/Images/CharacterFiles/Walk/Walk(6).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(7).png","Sprites/Images/CharacterFiles/Walk/Walk(8).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(9).png","Sprites/Images/CharacterFiles/Walk/Walk(9).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(5).png","Sprites/Images/CharacterFiles/Walk/Walk(6).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(7).png","Sprites/Images/CharacterFiles/Walk/Walk(8).png",
  "Sprites/Images/CharacterFiles/Walk/Walk(9).png","Sprites/Images/CharacterFiles/Walk/Walk(9).png"
  );

  EnemyAttack1 = loadAnimation("Sprites/Images/EnemySprites/BloodAxe/BloodAxe(1).png","Sprites/Images/EnemySprites/BloodAxe/BloodAxe(2).png",
                               "Sprites/Images/EnemySprites/BloodAxe/BloodAxe(3).png","Sprites/Images/EnemySprites/BloodAxe/BloodAxe(4).png",
                               "Sprites/Images/EnemySprites/BloodAxe/BloodAxe(5).png");

  EnemyAttack2 =  loadAnimation("Sprites/Images/EnemySprites/Scratch/RunningClaw(1).png","Sprites/Images/EnemySprites/Scratch/RunningClaw(2).png",
  "Sprites/Images/EnemySprites/Scratch/RunningClaw(3).png","Sprites/Images/EnemySprites/Scratch/RunningClaw(4).png",
  "Sprites/Images/EnemySprites/Scratch/RunningClaw(5).png","Sprites/Images/EnemySprites/Scratch/RunningClaw(6).png")    
  
  EnemyAttack3   = loadAnimation("Sprites/Images/EnemySprites/SuperScratch/RunningClaw(1).png","Sprites/Images/EnemySprites/SuperScratch/RunningClaw(2).png",
  "Sprites/Images/EnemySprites/SuperScratch/RunningClaw(3).png","Sprites/Images/EnemySprites/SuperScratch/RunningClaw(4).png",
  "Sprites/Images/EnemySprites/SuperScratch/RunningClaw(5).png","Sprites/Images/EnemySprites/SuperScratch/RunningClaw(6).png",
  "Sprites/Images/EnemySprites/SuperScratch/RunningClaw(7).png")

  DeathShot = loadAnimation("Sprites/Images/EnemySprites/RageShot/RageShot(1).png","Sprites/Images/EnemySprites/RageShot/RageShot(2).png",
  "Sprites/Images/EnemySprites/RageShot/RageShot(3).png")

  Death = loadAnimation("Sprites/Images/EnemySprites/Death/Death.png")
                               
  aestroidImage = loadImage("Asteriod.png")

  RoboImg = loadImage("R2.png");

  Rearth = loadAnimation("Sprites/Images/EarthFiles/E(1).png","Sprites/Images/EarthFiles/E(1).png",
  "Sprites/Images/EarthFiles/E(2).png","Sprites/Images/EarthFiles/E(2).png",
  "Sprites/Images/EarthFiles/E(3).png","Sprites/Images/EarthFiles/E(3).png",
  "Sprites/Images/EarthFiles/E(4).png"
  ,"Sprites/Images/EarthFiles/E(5).png","Sprites/Images/EarthFiles/E(6).png",
  "Sprites/Images/EarthFiles/E(7).png","Sprites/Images/EarthFiles/E(8).png",
  "Sprites/Images/EarthFiles/E(9).png","Sprites/Images/EarthFiles/E(10).png")

  SpaceImg = loadImage("Space.jpg");

  stage1_Button_Icon = loadImage("Stage1.png")

  stage2_Button_Icon1 = loadImage("Sprites/Images/Buttons/Stage2_Button (1).png");
  stage2_Button_Icon2 = loadImage("Sprites/Images/Buttons/Stage2_Button (2).png");
  stage3_Button_Icon1 = loadImage("Sprites/Images/Buttons/Stage3_Button (1).png");
  stage3_Button_Icon2 = loadImage("Sprites/Images/Buttons/Stage3_Button (2).png");
  stage4_Button_Icon1 = loadImage("Sprites/Images/Buttons/Stage4_Button (1).png");
  stage4_Button_Icon2 = loadImage("Sprites/Images/Buttons/Stage4_Button (2).png");
  stage5_Button_Icon1 = loadImage("Sprites/Images/Buttons/Stage5_Button (1).png");
  stage5_Button_Icon2 = loadImage("Sprites/Images/Buttons/Stage5_Button (2).png");

  LockedButton_Img    = loadImage("Sprites/Images/Buttons/LockedButton.png");
  PassedButton_Img    = loadImage("Sprites/Images/Buttons/PassedButton.png");
  UnlockedButton_Img  = loadImage("Sprites/Images/Buttons/UnlockedButton.png");
  CancelButton_Img    = loadImage("Sprites/Images/Buttons/CancelButton.png");

  StageScreen_Img = loadImage("StageScreen.jpg");

  Tank_Img = loadAnimation("Sprites/Images/TankSprites/Idle/Idle(2).png");

  Stage1_Img = loadImage("Stage1-Battleground.jpg")

  FireInAir_Img1= loadAnimation("Sprites/Images/TankSprites/FireInAir/FireInAir(1).png","Sprites/Images/TankSprites/FireInAir/FireInAir(2).png",
  "Sprites/Images/TankSprites/FireInAir/FireInAir(3).png","Sprites/Images/TankSprites/FireInAir/FireInAir(4).png");
  Bullet_Img = loadImage("Sprites/Images/TankSprites/Fire/Bullet_Img.png")
  Bullet_Img2 = loadImage("Sprites/Images/TankSprites/FireInAir/bullet.png");
  TankFire  = loadAnimation("Sprites/Images/TankSprites/Fire/Fire(1).png","Sprites/Images/TankSprites/Fire/Fire(2).png"
  ,"Sprites/Images/TankSprites/Fire/Fire(2).png","Sprites/Images/TankSprites/Fire/Fire(2).png"
  ,"Sprites/Images/TankSprites/Fire/Fire(3).png","Sprites/Images/TankSprites/Fire/Fire(3).png","Sprites/Images/TankSprites/Fire/Fire(3).png",
  "Sprites/Images/TankSprites/Fire/Fire(3).png","Sprites/Images/TankSprites/Fire/Fire(4).png");
  destroy_Img = loadAnimation("Sprites/Images/TankSprites/Destroyed/Damaged(1).png","Sprites/Images/TankSprites/Destroyed/Damaged(2).png",
  "Sprites/Images/TankSprites/Destroyed/Damaged(3).png","Sprites/Images/TankSprites/Destroyed/Damaged(4).png",
  "Sprites/Images/TankSprites/Destroyed/Damaged(5).png","Sprites/Images/TankSprites/Destroyed/Damaged(6).png",
  "Sprites/Images/TankSprites/Destroyed/Damaged(7).png","Sprites/Images/TankSprites/Destroyed/Damaged(8).png",
  "Sprites/Images/TankSprites/Destroyed/Damaged(9).png","Sprites/Images/TankSprites/Destroyed/Damaged(10).png",)

  Idle = loadAnimation("Sprites/Images/CharacterFiles/Walk/Walk(1).png")
} 
function setup(){
  canvas = createCanvas(displayWidth,displayHeight);


 Games = new Game();

 
 if(gameState ==="Interface"){
   //Interfaced.display();
   //player.display();
   Games.serve();
 }
 if(gameState === "ShowMap"){
   Games.showMapandStory();
   
 }
 if(gameState === PLAY){
 
  Games.stage1();
 }
 if(gameState === "Stage1"){
  
   Games.stage1();

 }


}
function draw(){
  if(playerState === "Played"){
    if(Throw.x>=tanks.x){  
      playerState = "Idle"
    }

    if(playerState === "Idle"){
      BlueFire.IdlePlayer()
      Throw.x = 330
      Throw.velocityX = 0;
      Throw.visible = false;

      Bullet.visible = false;
      Bullet.x= tanks.x;
      Bullet.velocityX = 0;
      tanks.IdleTank()
    }
    
  }
  



  drawSprites();
}

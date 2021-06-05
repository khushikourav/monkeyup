var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);

  monkey = createSprite(40,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.velocityX = -4;
 
  bananaGroup = new Group();
  obstacleGroup = new Group();
  

}


function draw() {
background("white");

  var survivalTime = 0;
  
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  textSize("20");
  fill("black");
  survivalTime = Math.round(frameCount/frameRate())
  text("survival Time: "+ survivalTime, 100, 50);
  
   monkey.collide(ground);
   ground.x = ground.width/2;
   console.log(ground.x);
  
  if(keyDown("space") && monkey.y > 250){
    monkey.velocityY = -14;
  }
   monkey.velocityY = monkey.velocityY + 0.8;
  
   spawnBanana();
   spawnObstacle();
  
  drawSprites();
}


function spawnBanana(){
  if(frameCount % 80 === 0 ){
    var banana = createSprite(400,300,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.07;
    banana.velocityX = -4;
    banana.lifetime = 100;
    bananaGroup.add(banana);
  }
}

function spawnObstacle(){
    if(frameCount % 300 === 0){
    var obstacle = createSprite(400,325,50,50);
   // obstacle.y = Math.round(random(300,400));
      obstacle.addImage(obstacleImage);
   obstacle.scale = 0.15;
    obstacle.velocityX = -4;
    obstacle.lifetime = 100;
   obstacleGroup.add(obstacle);
  }
}
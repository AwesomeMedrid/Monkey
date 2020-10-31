var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png") 
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}

function setup() {
  createCanvas(600, 400);
  monkey = createSprite(50, 312);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(300, 331,1200,30);
  obstacleGroup = new Group();
}


function draw() {
  background("white");
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
  rocks();
  
  console.log(monkey.y);
  
   if(keyDown("space")&& monkey.y >= 290) {
        monkey.velocityY = -5;
    }
  
  monkey.velocityY = monkey.velocityY + 0.1;
  
  monkey.collide(ground);
  if (monkey.isTouching(obstacleGroup)) {
    
    ground.velocityX = 0;
    monkey.velocityY = 0;
    
  obstacleGroup.setLifetimeEach(-1);
     
    obstacleGroup.setVelocityXEach(0);
  }
  ground.velocityX=-3;
  
 drawSprites();
}
function rocks() {
  if (frameCount % 180 === 0){
   obstacle = createSprite(600,300,10,40);
  obstacle.addImage("obimg", obstacleImage);
  obstacle.velocityX=-2;
  obstacle.scale=0.1;
  obstacleGroup.add(obstacle);
  obstacle.lifetime=300;
  monkey.depth=obstacle.depth
  obstacle.debug = true
  }
 
  
}














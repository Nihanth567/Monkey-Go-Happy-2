var monkey,monkey_image,obstacleGroup,foodGroup,jungle,jungle_image,ground,banana,banana_image,stone,stone_image;

var score;


function preload(){
  
  monkey_image = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  jungle_image = loadImage("jungle.jpg");
  
  banana_image = loadImage("banana.png");
  
  stone_image = loadImage("stone.png");
  
  
}


function setup() {
  createCanvas(600,300);
  
  
  monkey = createSprite(300,250,20,20);
  monkey.addAnimation(monkey_image);
  monkey.scale = 0.5;
  
  jungle = createSprite(300,150,600,300);
  jungle.addImage(jungle_image)
  jungle.scale = 0.5;
  
  ground = createSprite(302,20,600,300);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  ground.visible = false;
  
  score = 0;
}


function draw(){
 background(255); 
  
  obstacles();
  food();
  
  
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  
 monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  monkey.collide(ground);
  
  if(foodGroup.isTouching(monkey)){
    score = score +2;
    foodGroup.destroyEach();
    
  }
  
  if(obstaclesGroup.isTouching(monkey)){
    monkey.scale = 0.12;
    
    switch(score){
      case 10: monkey.scale = 0.15;
        break;
      case 20: monkey.scale = 0.20;
        break;
      case 30:monkey.scale = 0.30;
        break;
        case 40:monkey.scale = 0.45;
        break;
        case 50: monkey.scale = 0.5;
      break;
      default:break;
        
        
    }
    
    obstaclesGroup.destroyEach();
    
    
  }
  
  drawSprites();
  
}

function obstacles(){
  if(frameCount % 80 ===0){
   stone = createSprite(600,ground.y,20,15);
    stone.addImage(stone_image);
    stone.scale = 0.5;
    stone.velocityX = -6;
    stone.lifetime = 100;
    
    obstaclesGroup.add(stone);
  
}
}

function food(){
  if(frameCount % 80 ===0){
    banana = createSprite(600,random(240,275),10,15);
    banana.addImage(banana_image);
    banana.scale = 0.5;
    banana.velocityX = -3;
    
    foodGroup.add(banana);
    
  
  }
}


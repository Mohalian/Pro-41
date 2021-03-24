var umbrella, umbrellaIMG;
var raindrop,raindrop2,raindrop3,rain;

function preload(){
umbrellaIMG = loadImage("Image.png");
rain = loadImage("rain.png");
}

function setup(){
     umbrella = createSprite(750, 500);
    umbrella.addImage(umbrellaIMG);
    umbrella.scale = 0.6;
    umbrella.setCollider("circle", 0, 10);
 raindrop = createSprite(750, 0);
  raindrop.addImage(rain);
  raindrop.scale = 0.5;
    raindrop.setCollider("circle");
    raindrop.x = 750;
    raindrop.y = 0;
    raindrop.velocityY = 25;
    raindrop2 = createSprite(750, 0);
  raindrop2.addImage(rain);
  raindrop2.scale = 0.5;
    raindrop2.setCollider("circle");
    raindrop2.x = 775;
    raindrop2.y = 0;
    raindrop2.velocityY = 18;
    raindrop3 = createSprite(750, 0);
  raindrop3.addImage(rain);
  raindrop3.scale = 0.5;
    raindrop3.setCollider("circle");
    raindrop3.x = 625;
    raindrop3.y = 0;
    raindrop3.velocityY = 35;
    
}

function draw(){
var canvas = createCanvas(1250,600);
background("black");
  if (umbrella.displace(raindrop)) {
    raindrop.destroy();
  raindrop = createSprite(750, 0);  
raindrop.addImage(rain);
raindrop.scale = 0.5;
raindrop.setCollider("circle");
raindrop.x = 750;
raindrop.y = 0;   
raindrop.velocityY = 20;
  }
  if(umbrella.displace(raindrop2)) {
    raindrop2.destroy();
  raindrop2 = createSprite(750, 0);  
raindrop2.addImage(rain);
raindrop2.scale = 0.5;
raindrop2.setCollider("circle");
raindrop2.x = 775;
raindrop2.y = 0;   
raindrop2.velocityY = 18;
  }
  if(umbrella.displace(raindrop3)) {
    raindrop3.destroy();
  raindrop3 = createSprite(750, 0);  
raindrop3.addImage(rain);
raindrop3.scale = 0.5;
raindrop3.setCollider("circle");
raindrop3.x = 625;
raindrop3.y = 0;   
raindrop3.velocityY = 35;
  }

  drawSprites();
  if (raindrop.y > 600) {
    raindrop.x = 750;
    raindrop.y = 0;
  }
  if (raindrop2.y > 600) {
    raindrop2.x = 775;
    raindrop2.y = 0;
  }
}
   


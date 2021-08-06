var spaceCraft, spaceCraftImg;
var bgImg, iss,issImg;

function preload(){
  spaceCraftImg = loadImage("spacecraft1.png");
  issImg = loadImage("iss.png");
  bgImg = loadImage("spacebg.jpg");
}
function setup() {
  createCanvas(800,400);
 iss = createSprite(400, 200, 50, 50);
 iss.addImage(issImg);

 spaceCraft = createSprite(50,375,20,20);
 spaceCraft.addImage(spaceCraftImg);
 spaceCraft.scale = 0.2;
}

function draw() {
  background(bgImg);  

  if(spaceCraft.isTouching(iss)){
    text("Succesfully Docked", 50,100);
  }

  drawSprites();
}
function keyPressed(){
  if(keyIsDown(UP_ARROW)){
    spaceCraft.y=spaceCraft.y-10;
  }
  if(keyIsDown(DOWN_ARROW)){
    spaceCraft.y=spaceCraft.y+10;
  }
  if(keyIsDown(RIGHT_ARROW)){
    spaceCraft.x=spaceCraft.x+10;
  }
  if(keyIsDown(LEFT_ARROW)){
    spaceCraft.x=spaceCraft.x-10;
  }
}
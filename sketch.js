var fixedRect, movingRect;


function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 800, 50, 50);
  fixedRect = createSprite(400,100,50,50);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect.debug = true;
  movingRect.velocityY = -3;
  fixedRect.velocityY = 3;
}

function draw() {
  background("black");

  bounceOff (movingRect, fixedRect);
   
 
  drawSprites();
}


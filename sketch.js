var car;
var wall, thickness;
var speed;
var weight;
function setup() {
  createCanvas(1600,400);
  thickness = random(22, 83)
  speed = Math.round(random(223, 321));
  weight = Math.round(random(30,52));
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "grey";
  car.velocityX = speed;
  wall = createSprite(1200, 200, thickness, 200);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255);  
  drawSprites();
  if(wall.x - car.x < car.width/2 + wall.width/2){
    car.velocityX = 0;
    var deformation = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(deformation < 10){
      wall.shapeColor = "green";
    } else if(deformation > 10){
      wall.shapeColor = "red";
    }
  }
}
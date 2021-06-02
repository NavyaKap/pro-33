 const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var snow;
var snowArray = [];
var g1;
var ground;
var groundImg;
var snArry=[];
var runner,runnerImg;


function preload(){
  bg = loadImage("snow2.jpg")
  si=loadImage("snow4.webp")
  ground = loadImage("Snow bg 1.jpg")
  runnerImg = loadAnimation("snow img.gif")
}



function setup() {
  createCanvas(1200,700);
  
  myEngine = Engine.create();
  myWorld = myEngine.world;

  // g1= new Ground(600,670,1200,30)

  snow = Bodies.circle(200,200,50,{isStatic:false});
  World.add(myWorld,snow)
  console.log(snow);

  for(var i =0; i<60; i++){
snowArray.push(Bodies.circle(random(0,1200),random(0,700),50,{isStatic:false}))
World.add(myWorld,snowArray[i])
  }
runner=createSprite(750,690);
runner.addAnimation("runner",runnerImg)
runner.scale=0.5;
// runner.velocityX=2;
// runner.setCollider("rectangle",15, -20,100,180) 


 ground=Bodies.rectangle(600, 700,1200,30,{isStatic:true})
 World.add(myWorld,ground)

 g1= new Ground(200,200,100,100);
 edges = createEdgeSprites();
}

function draw() {
  background(bg); 

Engine.update(myEngine)

//runner.collide(ground);

//   if(ground.x < 530){
//     ground.x=600;
//   }

//   if(runner.x > 1200){
//     runner.x=150;
//   }

//   if(keyWentDown("space")&& runner.y >= 100) {
//     runner.velocityY = -12;
// }

 
    
// if (frameCount % 275 === 0){
//  snArry.push(new Snow(random(0, width), 10,10));
// }
for(var i=0; i<snArry.length; i++){
  snArry[i].display();
}

//g1.display();
fill("brown")
rectMode(CENTER)
rect(ground.position.x,ground.position.y,1200,30)

imageMode(CENTER);

image(si,snow.position.x,snow.position.y,50,50 )

for(var i =0; i<snowArray.length; i++){
  image(si,snowArray[i].position.x,snowArray[i].position.y,50,50 )
}
runner.bounceOff(edges);
drawSprites();



}
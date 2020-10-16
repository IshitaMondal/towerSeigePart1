
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,stand1,stand2;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15;
var block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25;
var polygon;
var slingshot;

function preload(){
  polygonImage = loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400, 390, 800, 20);

  stand1 = new Ground(400, 350, 160, 20);
  
  block1 = new Box(400,140,20,60);
  
  //SEA GREEN BOX
  block2 = new Gbox(390,200,20,60);
  block3 = new Gbox(400,200,20,60);
  block4 = new Gbox(410,200,20,60);
  
  //PINK BOX  
  block5 = new Pbox(380,260,20,60);
  block6 = new Pbox(390,260,20,60);
  block7 = new Pbox(400,260,20,60);
  block8 = new Pbox(410,260,20,60);
  block9 = new Pbox(420,260,20,60);

  //SKY BLUE BOX
  block10 = new Sbbox(370,320,20,60);
  block11 = new Sbbox(380,320,20,60);
  block12 = new Sbbox(390,320,20,60);
  block13 = new Sbbox(400,320,20,60);
  block14 = new Sbbox(410,320,20,60);
  block15 = new Sbbox(420,320,20,60);
  block16 = new Sbbox(430,320,20,60);

  stand2 = new Ground(630, 220, 120, 20);
  
  //PINK BOX
  block17 = new Pbox(630,60,20,60);

  //SEA GREEN BOX
  block18 = new Gbox(620,120,20,60);
  block19 = new Gbox(630,120,20,60);
  block20 = new Gbox(640,120,20,60);

   //SKY BLUE BOX
  block21 = new Sbbox(610,180,20,60);
  block22 = new Sbbox(620,180,20,60);
  block23 = new Sbbox(630,180,20,60);
  block24 = new Sbbox(640,180,20,60);
  block25 = new Sbbox(650,180,20,60);

  
  fill("yellow");
  polygon = Bodies.rectangle(50,200,6,60);
  //image("polygonImage",500,200,30,30);
  World.add(world,polygon);

  slingshot = new SlingShot(polygon.body,{x:50,y:200});

}

function draw() {
  background(0);  
  Engine.update(engine);
  
  ground.display();
  
  stand1.display();
  stand2.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  
  imageMode(CENTER);
  image(polygonImage,polygon.position.x,polygon.position.y,50,50);
  //polygon.display();

  slingshot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
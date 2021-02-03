const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var dustbin,paper,ground;	

var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	paper = new Ball(200,450,70);
	ground = new Ground(width/2,670,width,20);
	dustbin = new Dustbin(1050,550);
	launcher = new Launcher(paper.body,{x:200,y:150});

}

function draw() {

  background(230);
 
  Engine.update(engine);
  
  paper.display();
  ground.display();
  dustbin.display(); 
  launcher.display();
 
}

function mouseDragged() {
  	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}
function mouseReleased() {
	launcher.fly();
}
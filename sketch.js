
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var stone,hammer;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer1=new Hammer(400,300,50,100)
	stone1 = new Stone(400,100,50)
	stone2 = new Stone(100,600,50)
	ground1 = new Ground(400,700,800,20)
	rubber1=new Rubber(500,50,50,50)
	hammer2 = new Hammer(300,150,250,30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("purple");
  Engine.update(engine);
  hammer1.display();
  hammer2.display();
  stone1.display();
  stone2.display();
  ground1.display();
  rubber1.display();
  drawSprites();
 
}




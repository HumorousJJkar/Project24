
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball, ground1;

var BinPiece1, BinPiece2, BinPiece3;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(width/2,670,width,20);
	paperball = new Paper(125,650,40);

	BinPiece1 = new Dustbin(800,650,200,20);
	BinPiece1.shapeColor="red";
	BinPiece2 = new Dustbin(900,610,20,100);
	BinPiece2.shapeColor="red";
	BinPiece3 = new Dustbin(700,610,20,100);
	BinPiece3.shapeColor="red";


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  paperball.display();
  BinPiece1.display();
  BinPiece2.display();
  BinPiece3.display();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:240,y:-320});

	}

}


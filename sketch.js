
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;


    ground1 = new Ground(300,100,300,20);
	bob1 = new bob (300,300,20,10);
	bob2 = new bob (260,300,20,10);
	bob3 = new bob (220,300,20,10);
	bob4 = new bob (340,300,20,10);
	bob5 = new bob (380,300,20,10);
	
	bob1.shapeColor = color("blue");
	bob2.shapeColor = color("blue");
	bob3.shapeColor = color("blue");
	bob4.shapeColor = color("blue");
	bob5.shapeColor = color("blue");

	rope1 = new rope(bob1.body,ground1.body,{x:50,y:100});
	


	Engine.run(engine);
  
}


function draw() {
  background(0);
 bob1.display();
ground1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
rope1.display();



 
}

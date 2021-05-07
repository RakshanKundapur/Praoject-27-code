
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5, roof, rope1, rope2, rope3, rope4, rope4, rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(320, 575, 40);
	bob2 = new Bob(360, 575, 40);
	bob3 = new Bob(400, 575, 40);
	bob4 = new Bob(440, 575, 40);
	bob5 = new Bob(480, 575, 40);

	roof = new Roof(480, 250, 400, 20);

	rope1 = new Rope(roof.body, bob1.body, -80);
	rope2 = new Rope(roof.body, bob2.body, -40);
	rope3 = new Rope(roof.body, bob3.body, 0);
	rope4 = new Rope(roof.body, bob4.body, 40);
	rope5 = new Rope(roof.body, bob5.body, 80);

	Engine.run(engine);
  
}


function draw(){
  background(230);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x: 40, y: -85});
	}
}
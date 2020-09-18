
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     tree = new Tree(500,360,200,500)
	 stone = new Stone(100,100)
	 boy = new Boy(200,200,150,200)
	 ground = new Ground(400,700,800,20)
	 slingshot = new slingShot(boy.body,{x:200, y:50});
	 //mango = new Mango(100,100,100,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(240);
  Engine.update(engine);
  
tree.display()
stone.display()
boy.display()
ground.display()
slingshot.display()
//mango.display()
 
}

function mouseDragged(){
    Matter.Body.setPosition(boy.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


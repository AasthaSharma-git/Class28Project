
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var dustbin;
var crumpledBall;
var ground;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    dustbin=new DustBin();
	ground=new Ground(800,650)
	crumpledBall=new Paper(80);

	sling=new Slingshot(crumpledBall.body,{x:200,y:100})
	
	Engine.run(engine);
	console.log("Dustbin Project")
  
}


function draw() {
	
  background(255);
  Engine.update(engine);
  ground.display();
  dustbin.display();
  sling.display();
  crumpledBall.display();
  
 
 }

function keyPressed(){
	if(keyCode===RIGHT_ARROW){
		Body.applyForce(crumpledBall.body,crumpledBall.body.position,{x:100,y:-75})
	
	}
}

function mouseDragged(){


  Matter.Body.setPosition(crumpledBall.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

    sling.fly();

}
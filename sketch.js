
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject,dustbin1,dustbin2,dustbin3;




function preload()
{

}

function setup() {
	createCanvas(800, 1600);

ellipse(56,600,55,55);
Matter.Bodies.circle(56,500,55,[option])




var option={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
	}



dustbin1=createSprite(width/2,height-10,200,20);
dustbin1.shapeColor=color(255,0,0);

dustbin2=createSprite(width/2.75,height-80,20,160);
dustbin2.shapeColor=color(255,0,0);

dustbin3=createSprite(width/1.6,height-80,20,160);
dustbin3.shapeColor=color(255,0,0);





	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	
	  
}


function draw() {
  rectMode(CENTER);
  background("green");

  function keypressed(){
  if(keycode===RIGHT_ARROW){
  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{X:width/2,Y:height-10})
   }


  }









  drawSprites();
 
}




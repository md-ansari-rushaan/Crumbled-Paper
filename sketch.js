
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var Paper,paperImg,paperObj;
function preload(){
	paperImg = loadImage("paper.png");
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperOption ={
		isStatic:false,
		restitution:1.0,
		friction:1.0,
		density:1.2
	}
	paperObj=Bodies.rectangle(200, 150, 20, 20 , paperOption);
	World.add(world,paperObj);
	Paper = createSprite(1200,450,20,20);
	Paper.addImage(paperImg);
	Paper.scale = 0.5;
	Engine.run(engine);
	
}


function draw() {
	rectMode(CENTER);
	background(230);
	
	Paper.x=paperObj.position.x;
	Paper.y=paperObj.position.y;
	// Paper.y=mouseY;
	// Paper.x=mouseX;

    groundObject.display();
    dustbinObj.display();
	drawSprites();
	if(keyDown("space")){
		Matter.Body.applyForce(paperObj,paperObj.position,{x:7,y:-7});
	}
}


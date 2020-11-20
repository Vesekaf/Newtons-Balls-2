
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine, world;
var ball1, ball2, ball3, ball4, ball5;
var string1, string2, string3, string4, string5;
var platform1;



function preload()
{
	
}


function setup() {
	createCanvas(displayWidth, displayHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	/*let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {

		mouse: canvasmouse
	}
	mConstraint = Mouse.constraint.create(engine, options);
	World.add(world, mConstraint);
*/
	ball1 = new Ball(595, 400, 35, 0);

	ball2 = new Ball(530, 400, 35, 0);

	ball3 = new Ball(475, 400, 35), 0;

	ball4 = new Ball(670, 400, 35, 0);

	ball5 = new Ball(730, 400, 35, 0);

	

	platform1 = new Wood(600, 125, 300, 200);

	

	string1 = new Chain(ball1.body, {x: 595, y: 200});

	string2 = new Chain(ball2.body, {x: 530, y: 200});
	string3 = new Chain(ball3.body, {x: 475, y: 200});
	string4 = new Chain(ball4.body, {x: 670, y: 200});
	string5 = new Chain(ball5.body, {x: 730, y: 200});
	
	
	
	
	/*ball1.body, platform1.body, ball1.body.width/2, 0);*/
	/*string2 = new Chain({x: 200, y:200}, ball2.body);
	string3 = new Chain({x: 200, y:200}, ball3.body);
	string4 = new Chain({x: 200, y:200}, ball4.body);
	string5 = new Chain({x: 200, y:200}, ball5.body);
*/

	Engine.run(engine);
  
}


function draw() {
	
	Engine.update(engine);
  	rectMode(CENTER);
  	background(255);

  

  	platform1.display();

  	string1.display();
  	string2.display();
  	string3.display();
  	string4.display();
  	string5.display();

  	ball1.display();
  	ball2.display();
  	ball3.display();
  	ball4.display();
  	ball5.display();

	//console.log(mouseX + ", " + mouseY);

	//ball3.up();


  
  
  drawSprites();

  //console.log(mouseX + "," +mouseY);
 
}

function mouseDragged(){

		Matter.Body.setPosition(ball3.body, {x: mouseX, y: mouseY});




}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var r1, r2, r3, r4, r5;
var b1, b2, b3, b4, b5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

    var ball_options={
		restitution:0.1,
		isStatic:false
	}



	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

    b1 = Bodies.circle(400,200,25,ball_options);
    World.add(world,b1);

    
    b2 = Bodies.circle(450,200,25,ball_options);
    World.add(world,b2);

    b3 = Bodies.circle(500,200,25,ball_options);
    World.add(world,b3);

    b4 = Bodies.circle(550,200,25,ball_options);
    World.add(world,b4);

    b5 = Bodies.circle(600,200,25,ball_options);
    World.add(world,b5);




  r1 = Matter.Constraint.create({
        bodyA : roof,
        pointA: {x:-100 , y:0}    ,
        bodyB: b1,
        pointB: {x:0 , y:0},
        length: 100,
        stiffness: 0.1

  });


  World.add(world,r1);
   
  
  r2 = Matter.Constraint.create({
        bodyA: roof,
        pointA: {x:-70 , y:0},
        bodyB: b2,
        pointB: {x:0,y:0},
        length:100,
        stiffness: 0.01
  });

  World.add(world,r2);

  r3 = Matter.Constraint.create({
        bodyA: roof,
        pointA: {x:-50 , y:0},
        bodyB : b3,
        pointB: {x:0 , y:0},
        length:100,
        stiffness: 0.1



  });

  World.add(world,r3)

  r4 = Matter.Constraint.create({
    bodyA: roof,
    pointA: {x: -30 , y:0},
    bodyB: b4,
    pointB: {x:0,y:0},
    length:100,
    stiffness:0.1
  });

  World.add(world,r4);



  r5 = Matter.Constraint.create({
    bodyA : roof,
    pointA: {x:-10,y:0},
    bodyB: b5,
    pointB: {x:0,y:0},
    length:100,
    stiffness:0.1
  });

  World.add(world,r5);












 






	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse(b1.position.x,b1.position.y,25);
  ellipse(b2.position.x,b2.position.y,25);
  ellipse(b3.position.x,b3.position.y,25);
  ellipse(b4.position.x,b4.position.y,25);
  ellipse(b5.position.x,b5.position.y,25);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(b5,{x:0,y:0},{x:0.05,y:0});
    }
}
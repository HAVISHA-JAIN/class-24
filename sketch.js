const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rotater1;
var button;
var angle=30

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01,
  };

  var ground_options = {
    isStatic: true,
  };
  var rotater1_options = {
    isStatic: true,
  };

  ground = Bodies.rectangle(100, 400, 400, 20, ground_options);
  World.add(world, ground);

  ball = Bodies.circle(100, 10, 20, ball_options);
  World.add(world, ball);

  rotater1 = Bodies.rectangle(300, 250, 20, 80, rotater1_options);
  World.add(world, rotater1);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  button = createImg("up.png");
  button.size(50, 50);
  button.position(260, 50);
  button.mouseClicked(Force);
}

function draw() {
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 20);
  rect(ground.position.x, ground.position.y, 500, 20);

  push();
  fill("lightblue");
  rectMode(CENTER)
  translate (rotater1.position.x,rotater1.position.y)
  rotate(angle)
  angle+=1
  rect(0,0,20,80)
  pop();

  console.log(ground.position.y);
}
function Force() {
  Matter.Body.applyForce(ball, ball.position, { x: 0.02, y: 0 });
}

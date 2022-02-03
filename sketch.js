const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var bgImg,fruitImg,rabbitImg

var bunny
var button

function preload() {
  bgImg = loadImage("background.png")
  fruitImg = loadImage("melon.png")
  rabbitImg = loadImage("Rabbit-01.png")

}


function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  bunny = createSprite(250,630, 150,100)
  bunny.addImage(rabbitImg)
  bunny.scale = 1
  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
  imageMode(CENTER)
  button = createImg("cut_button.png")
  button.position(220,30)
  button.size(50,50)
  button.mouseClicked(drop)
}

function draw() 
{
  
  background(51);
  image(bgImg,250,350)
  ellipse(fruit.position.x,fruit.position.y,30,30);
  Engine.update(engine);
  ground.show();
rope.show();
drawSprites()

 image(fruitImg,fruit.position.x,fruit.position.y,100,100)
   
}

function drop() {
  rope.break()
  fruit_con.detatch()
  fruit_con = null
}
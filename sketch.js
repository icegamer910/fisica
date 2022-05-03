const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var sonic;

let engine;
let world;

var cima, baixo, esquerda, direita;
var bott1
var bott2
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  var sonicarrumado={
    restitution:0.95,
  }
  
  

  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  cima = new Parede(200, 10, 400, 20);
  baixo = new Parede(200, 390, 400, 20);
  esquerda = new Parede(10, 200, 20, 400);
  direita = new Parede(390, 200, 20, 400);
  sonic=Bodies.circle(200,100,20,sonicarrumado);
  World.add(world,sonic);
bott1=createImg("right.png");
bott1.position(220,30);
bott1.size(50,50);
bott1.mouseClicked(direitaf);
bott2=createImg("up.png");
bott2.position(20,30);
bott2.size(50,50);
bott2.mouseClicked(cimaf);
}

function draw() 
{
  background('black');
  Engine.update(engine);
  cima.desenhar();
  baixo.desenhar();
  esquerda.desenhar();
  direita.desenhar();
  fill("blue");
  ellipse(sonic.position.x,sonic.position.y,20)
}

function direitaf(){
  Matter.Body.applyForce(sonic,{x:0,y:0},{x:0.05,y:0});
}

function cimaf(){
  Matter.Body.applyForce(sonic,{x:0,y:0},{x:0,y:-0.05});
}
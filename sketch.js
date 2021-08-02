const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground;
var division1;
var division2;
var division3;
var division4;
var division5;
var division6;


function setup() {
  createCanvas(800,400)
  engine = Engine.create();
    world = engine.world;

  ground=new Ground(400,height,800,10);
  division1=new Division(700,390);
  division2=new Division(550,390);
  division3=new Division(400,390);
  division4=new Division(350,390);
division5=new Division(200,390);
division6=new Division(50,390);  
}

function draw() {
  background("pink");  


  drawSprites();

  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
}
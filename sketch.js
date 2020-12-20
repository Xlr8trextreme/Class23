const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld,box;

function setup() {
  createCanvas(800,400);

  myengine= Engine.create();
  myworld= myengine.world;

  box= new Box(300,300,60,40);
  box1 =  new Box(340,200,30,100);

  ground= new Ground(width/2,height-20,width,10);
}

function draw() {
  background(0);  
  Engine.update(myengine);
  
  box.display();
  box1.display()
  ground.display();

}


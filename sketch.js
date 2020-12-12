const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particles=[];
var plinkos = [];
var divisions = [];


function setup() {
  createCanvas(420,700);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
ground=new Ground(210,700,420,20);
ground1=new Ground(0,700,10,500);
ground2=new Ground(70,700,10,500);
ground3=new Ground(140,700,10,500);
ground4=new Ground(210,700,10,500);
ground5=new Ground(280,700,10,500);
ground6=new Ground(350,700,10,500);
ground7=new Ground(420,700,10,500);
}

function draw() {
  background(0); 

  
 // for(var j = 0; j < particles.length;j++){
   // plinkos.push(new Plinko(j,75,10));
  //}
  for(var j = 40; j <=width;j=j+50){
    plinkos.push(new Plinko(j,75,20));
  }
  if(frameCount%60===0){
    particles.push(new particles(random(width/2-10,width/2+10,10,10)));
  }
  ground.display(); 
  ground1.display(); 
  ground2.display(); 
  ground3.display(); 
  ground4.display(); 
  ground5.display(); 
  ground6.display(); 
  ground7.display(); 
  drawSprites();
}
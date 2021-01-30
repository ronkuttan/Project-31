const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var drops = [];
var maxDrops = 200;
var umbrella1;
var thundcreatedframe,thunder,thunder1,thunder2,thunder3,thunder4,thunderGrp;
var rand;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png")
    thunder2 = loadImage("thunderbolt/2.png")
    thunder3 = loadImage("thunderbolt/3.png")
    thunder4 = loadImage("thunderbolt/4.png")
    
  }


function setup(){
   createCanvas(480,700)
   engine = Engine.create();
   world = engine.world;

   umbrella1 = new Umbrella(225,540,120);

   thunderGrp = createGroup();

   
   for (var i =0; i <  maxDrops ; i++) {
    drops.push( new Drop(random(0,480),random(0,450)));
}

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);

    spawnthunder();
    drawSprites();

    umbrella1.display();
  

  for(var i = 0; i<maxDrops; i++){
      drops[i].showDrop();
      drops[i].update();
  }

  
}  

function spawnthunder(){
  if(frameCount % 100===0){
      thundcreatedframe = frameCount;
      thunder = createSprite(random(10,380),random(10,40),10,10)
      rand = Math.round(random(1,4));
      switch(rand){
        case 1 : thunder.addImage(thunder1);
        break;
        case 2 : thunder.addImage(thunder2);
        break;
        case 3 : thunder.addImage(thunder3);
        break;
        case 4 : thunder.addImage(thunder4);
        break;
        default:break;
      }
      thunder.scale = random(0.3,0.6)
      thunder.lifetime = 20;
      thunderGrp.add(thunder)
  
  }

}


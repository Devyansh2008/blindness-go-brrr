const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var en, wo
var yayeet
var score=0
plinkos=[]
particles=[]
divs=[]
function setup() {
  createCanvas(1400,800);
  
  en=Engine.create()
  wo=en.world

  for (var i=50; i<1400;i=i+100){
   plinkos.push(new Plinko(i,100)) 
  }
  
  for (var k=100; k<1400;k=k+100){
    plinkos.push(new Plinko(k,200)) 
   }
   for (var i=50; i<1400;i=i+100){
    plinkos.push(new Plinko(i,300)) 
   }
   for (var i=100; i<1400;i=i+100){
    plinkos.push(new Plinko(i,400)) 
   }

   for(var i=10; i<1400; i=i+150){
    divs.push(new Div(i,660))
   }

var op={
  isStatic:true
}

   ground=Bodies.rectangle(700, 750, 1200,30,op)
   World.add(wo, ground)

   
}

function draw() {
  background(random(0,255),random(0,255),random(0,255))
  Engine.update(en)
 rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1400,30,fill(random(0,255),random(0,255),random(0,255)))
 

  for(var i=0; i<plinkos.length; i++){
    plinkos[i].display()
  }

  
  for(var i=0; i<divs.length; i++){
   divs[i].display()
  }
  
  if(yayeet!=null){yayeet.display()
  if (yayeet.body.position.y>700){
    if(yayeet.body.position.x<1300){
      score=score+1
      yayeet=null
    }
  }}
  textSize(42.0)
text("Score :"+score,1200,40)
  drawSprites();
}
function mouseDragged(){yayeet=new Particle(mouseX,0)}

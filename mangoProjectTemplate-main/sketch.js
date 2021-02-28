
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var world,boy;

function preload(){
	boy =loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
    mango2=new mango(1010,170,30);
	mango3=new mango(1150,130,30);
	mango4=new mango(1110, 40,30);
	mango5=new mango(1140,160,30);
	mango6=new mango(1000,120,30);
	mango7=new mango(900,200,30);
	mango8=new mango(1200,190,30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new stone(240,420,30)
    launcherObject = new launcher(stoneObj.body,{x:240,y:420});
	Engine.run(engine);

}

function draw() {

  background(230);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
launcherObject.display();
  groundObject.display();
  stoneObj.display();
  

  
}

function mouseDragged () {
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}
function mouseReleased () 
{
launcherObject.fly()
}

detectcollision(lstone,lmango)
{
mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r)
{
Matter.Body.setStatic(lmango.body,false)
}

}


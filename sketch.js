sketch.js

var y;
var changeDirection;
var x;
var changeDirection;
var speedX = 2.5;
var speedY= 1.6;
var position
let fr = 60; //starting FPS


 // this function is called only once
function setup()
{

    createCanvas(800,600);
  movement = Math.floor(Math.random() * 5) + 1;
     x = 1;
   movement = Math.floor(Math.random() * 5) + 1;
     y = 1;
	changeDirection = false;
	//this variable acts as a "switch" that decides which direction
	//the circle is going based on it's position
  rectMode(CENTER);
}
/* this function is called continuously
    while the sketch is open in the browser
*/

function draw()

{
  
 //portrait
   background(254, 245, 231);
  strokeWeight(5)
    
	ellipse(x,500,20,20);
    ellipse(50, 200, 30, y+x/3);
  if(x >= 400 || x <= 0)
    {
       movement *= -1;
    }

     x += movement;

    fill('rgba(187, 143, 206, 0.9)') 
    ellipse(x,30,30);
    fill('rgba(52, 152, 219, 0.9)') 
	if(x>width){
		changeDirection=true}
	//if the circle passes the right side, change the direction
	//effects of direction change happen below
	else if (x<=0){
		changeDirection=false}
	//if the circle passes the left side (or becomes equal to 0)
	//changes the direction, effects are in the next if statement below
	
	if (x>=0 && changeDirection == false){
		x=x+1}
	//if x is greater than OR equal to 0, move right
	else if(changeDirection == true){
		x=x-1}
	//once the switch is changed, x must have been bigger than width
	//move circle back to the left



  
  
 //head
    noFill();
    ellipse(250,230,250,360);
  if(x >= 400 || x <= 0)
    {
       movement *= -1;
    }

     x += movement;
    fill('rgba(254, 245, 231, 0.9)')  
  
   //eyes 
    noFill();
    ellipse(190,140,50,30);
  strokeWeight(5);
    ellipse(300,140,50,30);
    fill('rgba(0,255,0, 0.25)');
    circle(300,140,30);
    circle(190,140,30);
    strokeWeight(10);
    point(300, 140);
    point(190, 140);

     
   //nose
    fill('rgba(255, 250,240,0.5)');
    triangle(230, 235, 250, 160, 275, 235);
 
    //mouth

    fill('rgba(255, 153, 153, 1.0)');
    ellipse(250,300,200,50);
    ellipse(250,300,175,30);
   
    //body

    fill('rgba(76, 6, 245, 0.5)');
    triangle(475, 600, 25, 600, 250, 400);
 
     //hair and sig
    noFill();
    strokeWeight(4);
    fill('rgba(229,152,102,0.9)');
    rect(250,40,200,60);
    line(250, 560, 250, 410);
    textAlign(LEFT);
    textSize(16);
    textSize ( 30+x/5)
    strokeWeight(5);
    fill('rgba(28,40,51,0.9)')
    text('Rose Krieg', 50, 70)
  
   //rectangle
  fill(239,87,197);
  translate(200,frameCount*3%height);
  rotate(frameCount/30%TWO_PI);
	rect(50,0,100,100);
 
  //ellipse
  fill('rgba(187, 143, 206, 0.9)') 
   ellipse(x,300,20,20);
   translate(130,frameCount*2%height);
  rotate(frameCount/20%TWO_PI);
  


}
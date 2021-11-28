var x = 50
var y = 50
var diameter = 25;
var y;
var changeDirection;
var x;
var changeDirection;
var speedX = 2.5;
var speedY= 1.6;
var position
var myGamePiece;
var myUpBtn;
var myDownBtn;
var myLeftBtn;
var myRightBtn;
var movement;
var objImage = null;

function setup() {

  createCanvas(1000, 800);

}


function draw(){

      //ellipse
      noFill();
      background(172, 244, 247);
      strokeWeight(5)
      ellipse(x,500,20,20);
      ellipse(50, 200, 30, y+x/3);
     if(x >= 400 || x <= 0)
       
          movement *= -1;
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
     
     
    //object 2
       noFill();
       fill('rgba(239, 29, 245, 0.9)') 
       ellipse(150,130,150,160);
     if(x >= 800 || x <= 0)
       {
          movement *= -1;
       }
   
        x += movement;
        
     
   
       noFill();
       fill('rgba(239, 29, 245, 0.9)')  
       ellipse(550,230,150,260);
     if(x >= 800 || x <= 0)
       {
          movement *= -1;
       }
   
        x += movement;
       
       
        //catch me
       noFill();
       strokeWeight(4);
       textSize ( 30+x/5)
       strokeWeight(5);
       fill('rgba(28,40,51,0.9)')
      
     
      //rectangle
     fill(239,87,197);
     translate(200,frameCount*3%height);
     rotate(frameCount/30%TWO_PI);
       rect(50,0,100,100);
       if(x >= 800 || x <= 0)
       {
          movement *= -1;
       }
   
        x += movement;
    
     //ellipse 1
     fill('rgba(187, 143, 206, 0.9)') 
      ellipse(x,300,20,20);
      translate(130,frameCount*2%height);
     rotate(frameCount/20%TWO_PI);
   
      // 2
      fill('rgba(187, 143, 206, 0.9)') 
      ellipse(x,20,20,300);
      translate(130,frameCount*2%height);
     rotate(frameCount/20%TWO_PI);
   
   }
   
  
                 
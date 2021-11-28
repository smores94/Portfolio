let x = 100;
let y = 100;
var x1 = 50;
var y1 = 50;
var diameter = 25;
var mousex = 0;
var mousey = 0;
var s = 83;
var w = 87;
var a = 65;
var d = 68;
var mousePressed;


function setup() {
    
  createCanvas(1400, 800);
 

  

  //game components
  
movement = Math.floor(Math.random() * 2) + 1;
   x = 1;
 movement = Math.floor(Math.random() * 2) + 1;
   y = 1;
  changeDirection = false;
  //this variable acts as a "switch" that decides which direction
  //the circle is going based on it's position
rectMode(CENTER);
}


  function draw() {
   
   
    if (keyIsDown(LEFT_ARROW)) {
        x -= 5;
      }
    
      if (keyIsDown(RIGHT_ARROW)) {
        x += 5;
      }
    
      if (keyIsDown(UP_ARROW)) {
        y -= 5;
      }
    
      if (keyIsDown(DOWN_ARROW)) {
        y += 5;
      }
    
      clear();
      fill(149, 247, 175)
      square(x, y, 55);
     
    
   //exit text
   fill(122, 8, 216)
triangle(30, 75, 58, 20, 86, 75);
strokeWeight(4);
text('Exit Rocket!', 1300, 50);




//object 2
   noFill();{
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
}
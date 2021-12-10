var x = 50;
var y = 50;
var diameter = 25;
var x1 = 150;
var y1 = 150;
var diameter1 = 125;

var myXs = [];
var myYs = [];
var myDiameters = [];

var myXs = []; // create an array for the x coordinate
var myYs = []; // create an array for the y coordinate
var myDiameters = []; // create array for the diameter of circles

//arrow codes
var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;
var DOWN_ARROW = 40;
 var UP_ARROW = 38;


//x and y for my player
var characterX = 100;
var characterY = 100;

//shapesandspeed
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

//x and y for shapes
var shapeXs = [];
var shapeYs = [];
var diameters = [];
var shapeXSpeeds = [];
var shapeYSpeeds = [];


//create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
var mousex = 0;
var mousey = 0;
var i = 0; i < 2; i++

shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
shapeXs[i] = getRandomNumber(500);
shapeYs[i] = getRandomNumber(600);
diameters[i] = getRandomNumber(30);

function setup() 
{
  createCanvas(800, 600);
  background(255, 204, 153);
 

      // create a for loop here to create the circles
      for(var i = 0; i < 2; i++)
      shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      diameters[i] = getRandomNumber(30);
      {
          // get all the random numbers to create a circles
          myXs[i] = getRandomNumber(800);
          myYs[i] = getRandomNumber(600);
          myDiameters[i] = getRandomNumber(100);
      }

      createCharacter(200,350);
}

function draw() 
{
    background(255, 204, 153);
    stroke(5)
    fill(164, 248, 251);

    //create character(200,350)
    drawcharacter();
    createcharacterMovement();


    background(220);
    square(30,40,50);

    circle(x,y,diameter);
    circle(x1,y1,diameter1)

    circle(myXs[0],myYs[0], myDiameters[0]);
    circle(myXs[1],myYs[1], myDiameters[1]);

    fill(24, 200, 29);
    circle(x, y, diameter);


    //potential block
    fill (198, 165, 250);
    //draw shape
    for (var i = 0; i < shapeXs.length; i ++) {
    circle(shapeXs[i], shapeYs[i],diameters[i]);
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    }

    //move the shapes
    shapeXs[i] += shapeXSpeeds[i];
    shapeYs[i] += shapeYSpeeds[i];
     //check shape out of bounds
     if (shapeXs[i] > width) {
        shapeXs[i] = 0;
     }
     if (shapeXs[i] < 0) {
        shapeXs[i] = width;
     }
     if (shapeYs[i] < 0) {
        shapeYs[i] = height;
     }

     if (shapeYs[i] > height) {
        shapeYs[i] = 0;
     }
    
    // call the function created
    controlCircle();

    ellipse(mousex, mousey, 15, 50);

    for(var i = 0; i < myXs.length; i++)
    {
      // concentric circle randomly using arrays
      ConcentricCircle(myXs[i], myYs[i], myDiameters[i], myDiameters[i]/2, 50, 120, 120, 120, 50, 120);
    }
 



    //call Borders
    createBorders();

    //call Character
    createCharacter();    

    //call characterMovement
    createcharacterMovement();

    //Call checkoutofbounds
    createcheckoutofbounds();
  
    //Call exitmessage
    createexitmessage();

    //call block
    createblock();

    //call randomspeed
    createrandomspeed();

    //call createmoveshape
    createmoveshape();


    //call checkifplayerleft
    createcheckifplayerleft();

    //call mouseclicked
    createmouseClicked();

    //call shapewithmouseclick
    createshapewithmouseclick();

    //call mouseproblem
    createmouseproblem();

      //enemy
      fill(104, 35, 103);
      //draw enemy
      circle(shapeX,shapeY,20);

      //call movingshape
      createmovingshape();

      //call moving rectangle
      createmovingrectangle();


}


function createBorders()
{
  
     //top border
     rect(0,0,width,10);
     //left border
     rect(0,0,10,height);
     //bottom border
     rect(0,height-10,width,10);
     //right border
     rect(width-10,0,10,height-50);
     //exit message
     text ("Exit", width-50,height-50)
  
}


function createcheckifplayerleft(){
//check if player has left exit
 if (characterX > width && characterY > width - 50) {
 fill(0);
 stroke(5);   
 textSize(32);
 text ("You Win!", width/2 - 50, height/2 - 50);
 }
}
function createCharacter()
{
  //character
  fill(164, 220, 251);
  characterX = x;
  characterY = y;
  square(characterX,characterY, 50);
  console.log(characterX);
    
}

function createcharacterMovement()
{ 
    //handle the arrow keys
    if (keyIsDown(LEFT_ARROW)) 
    {
        characterX -= 5;
      }
    
      if (keyIsDown(RIGHT_ARROW)) 
      {
        characterX += 5;
      }
    
      if (keyIsDown(UP_ARROW)) 
      {
        characterY -= 5;
      }
    
      if (keyIsDown(DOWN_ARROW)) 
      {
        characterY += 5;
      }
    
     
}
    function getrandomnumber(number) {
        return Math.floor(Math.random() * number) + 10;
    }

    //potential enemy

    fill (113, 113, 223)
    for (var i = 0; i < shapeXs.length; i++);
    circle(shapeXs[i]), shapeYs[i],diameters[i];

     function createblock()
     //fill with color shape
     {
     fill (249,107,3);
     circle (600,400,10);
     fill (255, 204, 100);
     rect (320, 320, 60, 60);
     fill (169, 250, 165);
     circle (600,500,50);
     fill (169, 250, 165);
     rect (420, 520, 60, 80);
       
     }

     function createmoveshape()
     //move shape
     {
     shapeX += shapeXSpeed;
     shapeY += shapeYSpeed;
     }

 

     function createrandomspeed()
     //random spee
     {
     shapeXSpeed  = Math.floor(Math.random() * 5) + 1;
     x = 1;
     shapeYSpeed = Math.floor(Math.random() * 5) + 1;
     y = 1;
     }
    



    function createshapewithmouseclick()
    //create shape with mouseclick
    {
    fill(120,130,140);
    circle(mouseShapeX,mouseShapeY,25);
    }
    function createmouseClicked()
    {
    mouseShapeX = mouseX
    mouseShapeY = mouseX
    }
 
  

     function createcheckoutofbounds()
     {

     if (characterX > width)
     {      
        characterX = 0;
     }
     if (characterX < width)
     {     
        characterX = 0;
     }
     if (characterY > height)
     {     
        characterY = 0;
     }
     
     if (characterY < height)
     {
        characterY = 0;
     }
    }

    function createexitmessage()    {
        textSize(16);
        text("You Win!",width - 50,height - 50);
        }
     function createmouseproblem()
    //mouse problem
    {
    if (x >= 300) 
    {
      x = 50;
    }
    
    if (y >= 300) 
    {
      y = 50;
    }
    if (diameter < 200) 
    {
      diameter += 2;
    } 
    else if (diameter >= 200) 
    {
      diameter = 25;
    }
  
    ellipse(mouseX, mouseY, 15, 50);

}
   
  
     function createmovingshape() 
     //moving shape
     {
     fill('rgba(172, 244, 247,0.9)') 
     movement = Math.floor(Math.random() * 5) + 1;
        x = 1;
      movement = Math.floor(Math.random() * 5) + 1;
        y = 1;
       changeDirection = false;
       //this variable acts as a "switch" that decides which direction
       //the circle is going based on it's position
     rectMode(CENTER);
     }

     function createmovingrectangle()
      //rectangle
      {
  fill(239,87,197);
  translate(200,frameCount*3%height);
  rotate(frameCount/30%TWO_PI);
	rect(50,0,100,100);
    if(x >= 800 || x <= 0)
    {
       movement *= -1;
    }

     x += movement;

}

  //ellipse
  fill('rgba(187, 143, 206, 0.9)') 
   ellipse(x,300,20,20);
   translate(130,frameCount*2%height);
  rotate(frameCount/20%TWO_PI);

function mouseMoved() 
{  
  mousex = mouseX;
  mousey = mouseY;

}

function getRandomNumber(number)
{
    return Math.floor(Math.random()*number)+10;
}

// define ConcentricCircle function
function ConcentricCircle(x,y, outer_diameter, inner_diameter, outer_red, outer_green,outer_blue, inner_red, inner_green, inner_blue)
{
    fill(outer_red,outer_green, outer_blue);
    circle(x,y,outer_diameter);
    fill(inner_red, inner_green, inner_blue);
    circle(x,y,inner_diameter);
}
         // create a for loop here to create the circles
         for(var i = 0; i < 2; i++)
         shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
         shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
         shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
         shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
         diameters[i] = getRandomNumber(30);
         {
             // get all the random numbers to create a circles
             myXs[i] = Math.random(800);
             myYs[i] = Math.random(600);
             myDiameters[i] = Math.random(100);
}


var x = 50;
var y = 50;
var diameter = 25;
var x1 = 150;
var y1 = 150;
var diameter1 = 125;

var myXs = [];
var myYs = [];
var myDiameters = [];




//x and y for my player
var characterX = 30;
var characterY = 50;

//define key codes for each letter
var shapeX;
var shapeY;
var shapeXSpeed;
var shapeYSpeed;

//create a shape when the mouse is clicked
var mouseShapeX = 10;
var mouseShapeY = 10;

function setup() 
{
  createCanvas(800, 600);
  background(255, 204, 153);
 

  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

  myXs[0] = 50;
  myYs[0] = 50;
  myDiameters[0] = 25;

  myXs[1] = 150;
  myYs[1] = 150;
  myDiameters[1] = 125;
  
}

function draw() 
{
    background(255, 204, 153);
    stroke(5)
    fill(164, 248, 251);

    background(220);
    square(30,40,50);

    circle(x,y,diameter);
    circle(x1,y1,diameter1)

    circle(myXs[0],myYs[0], myDiameters[0]);
    circle(myXs[1],myYs[1], myDiameters[1]);



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
rect(0,0,width,0);
//left border
rect(0,0,0,height);
//bottom border
rect(0,height-10,width,10);
//right border
rect(width-10,0,10,height-50);
//exit message
text ("Exit", width-50,height-50)
}    

function createCharacter()
{
  //character
  fill(164, 220, 251);
  square(characterX,characterY, 50);
    
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
     function createrandomspeed()
     //random speed
     {
     shapeXSpeed = math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1)();
     shapeYSpeed = math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1)();
     }
     function createblock()
     //fill with color shape
     {
     fill (249,107,3);
     circle (shapeX,shapeY,10);
     fill (255, 204, 100);
     rect (20, 20, 60, 60);
     }
     function createmoveshape()
     //move shape
     {
     shapeX += shapeXSpeed;
     shapeY += shapeYSpeed;
     }

 

     function createrandomspeed()
     //random speed
     {
     shapeXSpeed  = Math.floor(Math.random() * 5) + 1;
     x = 1;
     shapeYSpeed = Math.floor(Math.random() * 5) + 1;
     y = 1;

     }

     function createcheckifplayerleft()
     //check if player has left exit
     {
     if (characterX > width && characterY > width-50);
     
      fill(0);
      stroke(5);   
      textSize(32);
      text ("You Win!", width/2-50, height/2-50);

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
 
    function createexitmessage()    {
    textSize(16);
    text("You Win!",width-50,height-50);
    }

     function createcheckoutofbounds()
     {

     if (shapeX > width)
     {      
         shapeX = 0;
     }
     if (shapeX < width)
     {     
         shapeX = 0;
     }
     if (shapeY > height)
     {     
         shapeY = 0;
     }
     
     if (shapeY < height)
     {
         shapeY = 0;
     }
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

  
    /*
     function keyPressed() {
         if (keyCode === LEFT_ARROW){
             characterX -= 10;
         
     }
     else if (keyCode === RIGHT_ARROW){
        characterX -= 10;
     }
    
    else if (keyCode === UP_ARROW){
       characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW){
        characterY -= 10;
    }
    */  
    
     
     
    
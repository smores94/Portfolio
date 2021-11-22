myButton = new Clickable();


// this function is called only once
function setup()
{

    createCanvas(600,600);


}

function draw()
            {
                background(249, 178, 196);
            }
myButton.draw();{ // <- Draw the 'myButton' Clickable
            //...
          }
myButton = new Clickable();     //Create button
myButton.locate(20, 20);        //Position Button
myButton.onPress = function(){  //When myButton is pressed
  this.color = "#AAAAFF";       //Change button color
  alert("Yay!");                //Show an alert message
}
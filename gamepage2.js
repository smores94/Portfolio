var x = 50;
var y = 50;
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
var myGamePiece;
var myGameArea;
var objImage = null;
var key_code = e.which || e.keyCode

function setup() {

  createCanvas(800, 600);
}

<script type="text/javascript">
    //init object globally
    {
           
        function init() {
        objImage = document.getElementById("myImage");
        objImage.style.position = "relative";
        objImage.style.left = "0px";
        objImage.style.top = "0px";
    }

    function getKeyAndMove(e);{
           switch (key_code);
            case 37: //left arrow key
                moveLeft();
                break;
            case 38: //Up arrow key
                moveUp();
                break;
            case 39: //right arrow key
                moveRight();
                break;
            case 40: //down arrow key
                moveDown();
                break;
        
    }
    function moveLeft() {
        objImage.style.left = parseInt(objImage.style.left) - 5 + "px";
    }
    function moveUp() {
        objImage.style.top = parseInt(objImage.style.top) - 5 + "px";
    }
    function moveRight() {
        objImage.style.left = parseInt(objImage.style.left) + 5 + "px";
    }
    function moveDown() {
        objImage.style.top = parseInt(objImage.style.top) + 5 + "px";
    }
    window.onload = init;
</script>


function draw() {
    background(155, 234, 251);
    fill(247, 6, 35);
    square(30,40,50);
}
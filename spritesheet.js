let img = new Image();
img.src = 'C:\Users\rosek\Documents\1. Fall 2021\MART 120\Homework 6\Portfolio\startbutton.png';
img.onload = function() {
  init();
};

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

function init() {
  // future animation code goes here
  // Method 1 - Using width, height for each frame and number of frames
sprite_sheet = loadSpriteSheet('Users\rosek\Documents\1. Fall 2021\MART 120\Homework 6\Portfolio\Green-Cap-Character-16x18 (1).png', 171, 158, 11);
}
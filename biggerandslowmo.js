
let cols,rows;
let w = 100;
let grid = [];
let current;
let stack = [];


function setup() 
{
  createCanvas(1000, 1000);
  cols = floor(width/w);
  rows = floor(height/w);
  frameRate(1);

  for (let c = 0; c < cols; c++){
  for (let r = 0; r < rows; r++){
  var cell = new Cell(c,r);
  grid.push(cell);
}
  }

  current = grid[0];

}
function draw(){
    background(242, 206, 101);
    for (let c = 0; c < grid.length; c++){
    grid[c].show();
    }
    for(let r = 0; r < this.rows; r++){
        grid[r].show();
    }
    
    current.visited = true;
    current.highlight();
      
    let next = current.checkNeighbors();
    if (next){
        next.visited = true;

        stack.push(current);
       
        removeWalls(current,next);

        current = next;
    } else if (stack.length > 0) {
        current = stack.pop();
      }
    }

      function index (c,r){
        if (c < 0 || r < 0 || c > cols - 1 || r > rows - 1) {
        return -1;
      }
      return c + r * cols;
    }

    function removeWalls(cell1, cell2) {

        let y = cell1.c - cell2.c;
         
        if (y === 1){
            cell1.walls[3] = false;
            cell2.walls[1] = false;
        }else if (y === -1);{
        cell1.walls[1] = false;
        cell2.walls[3] = false;
        }
         
            let x = cell1.r - cell2.r;
            if (x === 1){
                cell1.walls[0] = false;
                cell2.walls[2] = false;
            }else if (x === -1);{
            cell1.walls[2] = false;
            cell2.walls[0] = false;
            }
        }

var canvas;
var ctx;
const FPS= 50;
const canvasWidth=500;
const canvasHeight=400;

class character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.direction=true; //true: frontal, false: backwards
    this.sense = true; // true: horizontal false: vertical
    this.endOfCanvas = false;
    this.outOfBounds = function() {
        let isOut = false;
      if(this.x > canvasWidth) {
        this.x = -1;
        !isOut;
      } else if (this.x < -1){
        this.x =  canvasWidth;
        !isOut;
      }else if (this.y < -1){
        this.y =  canvasHeight;
        !isOut;
      }else if (this.y > canvasHeight){
        this.y =  -1;
        !isOut;
      }
      this.endOfCanvas = isOut;
    }
    this.draw = function(color) {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, 20, 20);
    };
    this.moveToCoordinate= function(axis,currentDirection,currentSense){
      this.direction = currentDirection;
      this.sense = currentSense;
      this.outOfBounds();
      if(!this.endOfCanvas){
        if(currentDirection) {
          this[axis]++;
        } else {
          this[axis]--;
        }
      }
    }
  }
}
const player1 = new character(10,100);  
const obstacle = new character(40,90); 

const initGame=()=>{
  canvas = document.getElementById('gameCanvas'); 
  ctx = canvas.getContext('2d'); 
  ctx.fillStyle = '#FF0000';

  setInterval(()=>{
    main();
  },1000/FPS);
};

const cleanCanvas=()=>{
  canvas.width =500;
  canvas.heigh = 400;
}
const main = ()=>{
  cleanCanvas();
  player1.draw("#FF0000");
  obstacle.draw("black");
  player1.moveToCoordinate('x',true, true);
};
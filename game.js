
var canvas;
var ctx;
const FPS= 50;
const canvasWidth=500;
const canvasHeight=400;
const keyBinds ={
  up:38,
  down:40,
  left:37,
  right:39
}
const playerPrefs ={
  velocity : 10
}

class sceneObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
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
    this.moveToCoordinate= function(axis,velocity,currentDirection,currentSense){
      this.direction = currentDirection;
      this.sense = currentSense;
      this.outOfBounds();
      if(!this.endOfCanvas){
        if(currentDirection) {
          this[axis]+=velocity;
        } else {
          this[axis]-=velocity;
        }
      }
    }
  }
}

const player1 = new sceneObject(10,100,'player');  
const obstacle = new sceneObject(40,90,'obstacle'); 

document.addEventListener('keydown', function(pressedKey){
if(pressedKey.keyCode === keyBinds.up){
  player1.moveToCoordinate('y',playerPrefs.velocity,false, false);
  };
if(pressedKey.keyCode === keyBinds.down){
    player1.moveToCoordinate('y',playerPrefs.velocity,true, false);
    };
if(pressedKey.keyCode === keyBinds.left){
      player1.moveToCoordinate('x',playerPrefs.velocity,false, true);
  };
if(pressedKey.keyCode === keyBinds.right){
    player1.moveToCoordinate('x',playerPrefs.velocity,true, true);
};
})
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
  obstacle.moveToCoordinate('y',2,false, true);
};
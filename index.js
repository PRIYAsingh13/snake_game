// ====== Game constants and variable =====
const board = document.querySelector('.board')
let direction = { x: 0, y: 0 };
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
  {
    x: 13,
    y: 15,
  },
];
food = {x:6,y:7}

// ====== Game Function ========
function main(ctime) {
  window.requestAnimationFrame(main);
  if ((ctime - lastPaintTime) / 1000 < 1/speed) {
    return;
  }
  lastPaintTime = ctime;
  gameEngine();
  // console.log(ctime)
}
function gameEngine() {
  // update the snake array and food

  // display the snake and food
//   display the snake
  board.innerHTML = "";
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    snakeElement.classList.add("snake");
    if(index === 0){
        snakeElement.classList.add('head')
    }
    board.appendChild(snakeElement);
  });


// display the food

    foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    board.appendChild(foodElement);
//   });
}

// ============  Main logic starts here  =======
window.requestAnimationFrame(main);

const canvas = document.getElementById('game');
const btnRight = document.getElementById('right')
const btnDown = document.getElementById('down')
const btnLeft = document.getElementById('left')
const btnUp = document.getElementById('up')
const game = canvas.getContext('2d');

let canvasSize;
let elementsSize;

const playerPosition = {
  x: undefined,
  y: undefined
}

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize() {
    if (window.innerHeight > window.innerWidth) {
      canvasSize = window.innerWidth * 0.8;
    } else {
      canvasSize = window.innerHeight * 0.8;
    }
    
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);
    
    elementsSize = canvasSize / 10.5;
  
    startGame();
  }
  
  function startGame() {
    console.log({ canvasSize, elementsSize });
  
    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'center';

    const map = maps[0];
    const mapRows = map.trim().split('\n');
    const mapEachElement = mapRows.map(row => row.trim().split(''));

    game.clearRect(0,0,canvasSize, canvasSize);

    mapEachElement.forEach((row, rowI) => {
      row.forEach((col, colI) => {
        const emoji = emojis[col];
        const posX = elementsSize * (colI + 0.8);
        const posY = elementsSize * (rowI + 1.1);

        if (col == 'O') {
          if (!playerPosition.x && !playerPosition.y) {
            playerPosition.x = posX;
            playerPosition.y = posY;
            console.log({playerPosition});
          }
        }

        game.fillText(emoji, posX, posY);
      });
    });
  
    movePlayer();
  }

  function movePlayer() {
    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y);
  }


  btnUp.addEventListener("click", moveUp);
  btnLeft.addEventListener("click", moveLeft);
  btnRight.addEventListener("click", moveRight);
  btnDown.addEventListener("click", moveDown);
  window.addEventListener("keydown", moveByKeys);

  function moveRight() {
    console.log("Me muevo hacia la derecha");
    playerPosition.x += elementsSize;
    startGame()
  }
  function moveDown() {
    console.log("Me muevo hacia abajo");
    playerPosition.y += elementsSize;
    startGame()
  }
  function moveLeft() {
    console.log("Me muevo hacia la izquierda");
    playerPosition.x -= elementsSize;
    startGame()
  }
  function moveUp() {
    console.log("Me muevo hacia arriba");
    playerPosition.y -= elementsSize;
    startGame()
  }
  function moveByKeys(event) {
    if (event.key == 'ArrowUp') moveUp();
    else if (event.key == 'ArrowLeft') moveLeft();
    else if (event.key == 'ArrowRight') moveRight();
    else if (event.key == 'ArrowDown') moveDown();
  }
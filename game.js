const canvas = document.getElementById('game');
const game = canvas.getContext('2d');


let canvasSize;
let elementsSize;

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

    const map = maps[1];
    const mapRows = map.trim().split('\n');
    const mapEachElement = mapRows.map(row => row.trim().split(''));

    mapEachElement.forEach((row, rowI) => {
      row.forEach((col, colI) => {
        const emoji = emojis[col];
        const posX = elementsSize * (colI + 0.8);
        const posY = elementsSize * (rowI + 1.1);
        game.fillText(emoji, posX, posY);
      });
    });
  
    /* for(let row = 1; row <= 10; row++){
        for(let column = 1; column <= 10; column++) {
          game.fillText(emojis[mapEachElement[row - 1][column - 1]], elementsSize * column - 8, elementsSize * row );
        }
      } */
  }

 
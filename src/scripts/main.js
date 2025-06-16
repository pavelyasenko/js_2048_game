'use strict';

const Game = require('../modules/Game.class');
const game = new Game();

document.addEventListener('keydown', (eventt) => {
  switch (eventt.key) {
    case 'ArrowLeft':
      game.moveLeft();
      break;
    case 'ArrowRight':
      game.moveRight();
      break;
    case 'ArrowUp':
      game.moveUp();
      break;
    case 'ArrowDown':
      game.moveDown();
      break;
  }
});

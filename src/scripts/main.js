'use strict';

const Game = require('../modules/Game.class');
const game = new Game();

const startButon = document.querySelector('.start');

startButon.addEventListener('click', () => {
  // eslint-disable-next-line no-undef
  game.start();
});

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

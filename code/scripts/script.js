window.onload = function() {
  const myGame = new Game();
    myGame.start();
    myGame.createObstacles();
    document.getElementById("game-board").style.display = 'none';

  document.getElementById('start-button').onclick = function() {
    title.remove();
    document.getElementById("game-board").style.display = 'block';
  };
};

// MOVE SCORE TO NAV
// MAKE START WITH 3 LIVES AND WIN / LOSE
// INCREASE DIFFICULTY WITH EVERY WIN
// MAKE 2 SETS OF OBSTACLES FOR WATER AND (4 LANES) AND LAND
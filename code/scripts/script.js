
window.onload = function() {
  const myGame = new Game();
    myGame.start();
    myGame.createObstacles();
    document.getElementById("game-board").style.display = 'none';
    document.getElementById("level-span").style.display = 'none';
    document.getElementById("lives-span").style.display = 'none';

  document.getElementById('start-button').onclick = function() {
    title.remove();
    document.getElementById("game-board").style.display = 'block';
    document.getElementById("level-span").style.display = 'block';
    document.getElementById("lives-span").style.display = 'block';
  }
};
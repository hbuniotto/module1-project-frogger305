window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    title.remove();
    const myGame = new Game();
    myGame.start();
    myGame.createObstacles();
  };
};

// Humberto I fixed most of the things and organized the code.
// Just check it out… Cars(obstacles) coming from diff directions
// -it’s fixed and also I did the collision but didn’t specified what to do when collision,
// you can check collision on console.
// you can add command what happens when collision.
// And also I deleted most of the things that you don’t need.
// Check CSS and HTML files too,and you don’t need component.js anymore,
// I moved drawChicken() to player where it belongs,so you don’t go crazy looking for it.
//you need to do score and add code for checkCollision()

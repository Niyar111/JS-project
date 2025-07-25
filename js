const gameArea = document.getElementById("gameArea");
const player = document.getElementById("player");
let playerX = 130;

document.addEventListener("keydown", moveCar);

function moveCar(e) {
  if (e.key === "ArrowLeft" && playerX > 0) {
    playerX -= 10;
  }
  if (e.key === "ArrowRight" && playerX < 260) {
    playerX += 10;
  }
  player.style.left = playerX + "px";
}

// Optional: Add enemies (obstacles)
function createEnemy() {
  const enemy = document.createElement("div");
  enemy.classList.add("enemy");
  enemy.style.left = Math.floor(Math.random() * 260) + "px";
  enemy.style.top = "-70px";
  gameArea.appendChild(enemy);

  moveEnemy(enemy);
}

function moveEnemy(enemy) {
  let pos = -70;
  const interval = setInterval(() => {
    pos += 5;
    enemy.style.top = pos + "px";

    // Collision check
    if (
      pos > 410 &&
      parseInt(enemy.style.left) > playerX - 40 &&
      parseInt(enemy.style.left) < playerX + 40
    ) {
      clearInterval(interval);
      alert("💥 Game Over!");
      location.reload();
    }

    if (pos > 500) {
      clearInterval(interval);
      enemy.remove();
    }
  }, 50);
}

// Start creating enemies every second
setInterval(createEnemy, 1000);

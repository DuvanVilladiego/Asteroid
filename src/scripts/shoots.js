const player = document.getElementById('player');
const shoots = document.getElementById('shoots');

let rotate = 0;

function rotateLeft() {
    if(rotate >= 360) { rotate = 0}
    rotate += 5;
    player.style.transform = `rotate(${rotate}deg)`;
}

function rotateRight() {
    if(rotate <= -360) { rotate = 0}
    rotate -= 5;
    player.style.transform = `rotate(${rotate}deg)`;
}

function shoot() {
    const bulletContainer = document.createElement("div");
    bulletContainer.className = "bulletContainer";
    const bullet = document.createElement("div");
    bulletContainer.appendChild(bullet);
    bullet.className = "bullet";
    bullet.innerHTML = ".";
    bulletContainer.style.transform = `rotate(${rotate}deg)`;
    shoots.appendChild(bulletContainer);
    let timer = 0;
    const bulletLife = setInterval(() => {
        if(timer < 800) {
            timer += 1;
            bullet.style.transform = `translateX(${timer}px)`;
        } else {
            shoots.removeChild(bulletContainer);
            timer = 0;
            clearInterval(bulletLife);
        }
    }, 1);
}

window.addEventListener("keypress", function(e) {
    if (e.code === "KeyD") {
        rotateLeft();
    } else if (e.code === "KeyA") {
        rotateRight();
    }
    if (e.code === "Space") {
        shoot();
    }
})
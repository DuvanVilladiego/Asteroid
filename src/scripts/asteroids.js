const body = document.getElementById('body');

function createAsteroid() {
    const asteroidContainer = document.createElement("div");
    asteroidContainer.className = "asteroidContainer";
    const asteroid = document.createElement("img");
    asteroidContainer.appendChild(asteroid);
    asteroid.src = "./src/img/meteor.png";
    asteroid.style = "width:200px;  heigth:200px;";
    asteroidContainer.style.transform = `rotate(${rotate}deg)`;
    asteroids.appendChild(asteroidContainer);
}

setInterval(function () {
    rotate += 1;
    if (rotate > 360) {
        rotate = 0;
    }
    let ASTEROIDS = 5;
    for (let i = 0; i < ASTEROIDS; i++) {
        createAsteroid();
    }
},10000)
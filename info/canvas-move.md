# js canvas game move

## circle

```javascript
let direction = -1;
const startAngle = -Math.PI / 2; // top position
const radius = 125;
// direction = [-1, 1][parseInt(this.elapsed / 1000, 10) % 2];
const angle = direction * (this.elapsed / 600) + startAngle;
const nx = Math.cos(angle) * radius + top.x;
const ny = Math.sin(angle) * radius + top.y;
```

## rectangle

```javascript
const pi = Math.PI;
const left = pi;
const right = 0;
const down = pi / 2;
const up = -pi / 2;

const move = [left, left, left, down, right, right, right, up];
const speed = 2;
let nextPos = getNextPosition(this.center.x, this.center.y, move[this.elapsed % move.length], speed);
```

## control canvas frame rate
```javascript
let stop = false;
let frameCount = 0;

let fps, fpsInterval, startTime, now, then, elapsed;

// initialize the timer variables and start the animation

function startAnimating(fps) {
  fpsInterval = 1000 / fps;
  then = Date.now();
  startTime = then;
  animate();
}

function animate() {
  // request another frame

  requestAnimationFrame(animate);

  // calc elapsed time since last loop

  now = Date.now();
  elapsed = now - then;

  // if enough time has elapsed, draw the next frame

  if (elapsed > fpsInterval) {
    // Get ready for next frame by setting then=now, but also adjust for your
    // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
    then = now - (elapsed % fpsInterval);

    // drawing on canvas here
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updatePlayer(state);
    updateBoxes(state);
  }
}
// init game 60 per second
startAnimating(60);

```

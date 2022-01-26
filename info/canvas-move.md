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

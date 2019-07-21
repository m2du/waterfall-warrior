export default class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }

    scale(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    magnitude() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}

Vector2.up = { x: 0, y: 1 };
Vector2.down = { x: 0, y: -1 };
Vector2.left = { x: -1, y: 0 };
Vector2.right = { x: 1, y: 0 };
Vector2.zero = { x: 0, y: 0 };
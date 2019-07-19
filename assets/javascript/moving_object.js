import Game from './game';

export default class MovingObject {
    constructor(options) {
        this.pos = options.pos;
        this.vel = options.vel;
        this.size = options.size;
        this.game = options.game;
    }

    collideWith(other) {
        // default
    }

    draw(ctx) {
        // default
    }

    isCollideWith(other) {
        // default
    }
    
    move(deltaTime) {
        const offsetX = this.vel.x * deltaTime;
        const offsetY = this.vel.y * deltaTime;

        if (this.game.isOffScreen(this.pos.y, this.size.y)) {
            this.remove();
        }
    }

    remove() {
        this.game.remove(this);
    }
}
import Game from './game';
import Vector2 from './util/vector2';
import { Time } from './util/util';

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

    willCollideWith(other, moveAmount) {
        // default
    }
    
    move() {
        const deltaTime = Time.deltaTime;
        
        const offset = new Vector2(this.vel.x * deltaTime, this.vel.y * deltaTime);
        this.pos.add(offset);

        if (this.game.isOffScreen(this.pos.y, this.size.y)) {
            this.remove();
        }
    }

    remove() {
        this.game.remove(this);
    }
}
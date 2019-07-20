import { GAME_WIDTH, GAME_HEIGHT } from './constants';
import Vector2 from './util/vector2';
import MovingObject from './moving_object';

export default class Block extends MovingObject {
    constructor(options) {
        super(options);
    }

    willCollideWith(player, moveAmount) {
        // bounds
        const top = this.pos.y + this.size.y;
        const bottom = this.pos.y;
        const left = this.pos.x - this.size.x / 2;
        const right = this.pos.x + this.size.x / 2;

        // player bounds
        const playerTop = player.pos.y + player.size.y + moveAmount.y;
        const playerBottom = player.pos.y + moveAmount.y;
        const playerLeft = player.pos.x - player.size.x / 2 + moveAmount.x;
        const playerRight = player.pos.x + player.size.x / 2 + moveAmount.x;

        // check top
        if ((playerBottom < top && playerTop > top) &&
            ((playerLeft >= left && playerLeft <= right) || 
            (playerRight <= right && playerRight >= left))) {
                moveAmount.y = -(player.pos.y - top);
                player.controller.collisionFlags.below = true;
        }

        // check bottom

        // check left

        // check right
    }

    draw(ctx) {
        const pos = this.pos;
        const size = this.size;

        // draw block
        ctx.fillStyle = 'green';
        ctx.fillRect(pos.x - size.x / 2, GAME_HEIGHT - pos.y - size.y, size.x, size.y);
    }
}
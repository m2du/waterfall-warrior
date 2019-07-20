import { 
    GAME_WIDTH, GAME_HEIGHT,
    PLAYER_WIDTH, PLAYER_HEIGHT, SKIN_WIDTH } from './constants';
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
        const playerTop = player.pos.y + player.size.y;
        const playerBottom = player.pos.y;
        const playerLeft = player.pos.x - player.size.x / 2;
        const playerRight = player.pos.x + player.size.x / 2;

        // check block top, player bottom
        if ((playerBottom + moveAmount.y < top && playerTop > top) &&
            ((playerLeft >= left && playerLeft <= right) ||
                (playerRight <= right && playerRight >= left))) {
            moveAmount.y = top - playerBottom;
            player.controller.collisionFlags.below = true;
        }

        // check block bottom, player top

        // check block left, player right
        if ((playerRight + moveAmount.x > left && playerLeft < left) &&
            ((playerBottom >= bottom && playerBottom <= top) ||
                (playerTop <= top && playerTop >= bottom))) {
            moveAmount.x = left - playerRight;
            player.controller.collisionFlags.right = true;
        }

        // check block right, player left
        if ((playerLeft + moveAmount.x < right && playerRight > right) &&
            ((playerBottom >= bottom && playerBottom <= top) ||
                (playerTop <= top && playerTop >= bottom))) {
            moveAmount.x = right - playerLeft;
            player.controller.collisionFlags.left = true;
        }
    }

    draw(ctx) {
        const pos = this.pos;
        const size = this.size;

        // draw block
        ctx.fillStyle = 'green';
        ctx.fillRect(pos.x - size.x / 2, GAME_HEIGHT - pos.y - size.y, size.x, size.y);
    }
}
import {
    GAME_WIDTH,
    GAME_HEIGHT,
    PLAYER_WIDTH,
    PLAYER_HEIGHT,
    SKIN_WIDTH
} from './constants';
import Vector2 from './util/vector2';
import MovingObject from './moving_object';

const TILESET = new Image();
TILESET.src = './assets/images/tileset.png'
const TILE_SIZE = 16;
const EXTRA = 5;

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
            ((playerLeft > left && playerLeft < right) ||
                (playerRight < right && playerRight > left))) {
            moveAmount.y = top - playerBottom;
            player.controller.collisionFlags.below = true;
            player.vel.y = this.vel.y;
        }

        // check block bottom, player top
        else if ((playerTop + moveAmount.y > bottom && playerBottom < top) &&
            ((playerLeft > left && playerLeft < right) ||
                (playerRight < right && playerRight > left))) {
            moveAmount.y = bottom - playerTop;
            player.controller.collisionFlags.above = true;
            player.vel.y = this.vel.y;
        }

        // check block left, player right
        else if ((playerRight + moveAmount.x > left && playerLeft < left) &&
            ((playerBottom >= bottom && playerBottom <= top) ||
                (playerTop <= top && playerTop >= bottom))) {
            moveAmount.x = left - playerRight;
            player.controller.collisionFlags.right = true;
            player.controller.collisionFlags.minSlideSpeed = this.vel.y;
        }

        // check block right, player left
        else if ((playerLeft + moveAmount.x < right && playerRight > right) &&
            ((playerBottom >= bottom && playerBottom <= top) ||
                (playerTop <= top && playerTop >= bottom))) {
            moveAmount.x = right - playerLeft;
            player.controller.collisionFlags.left = true;
            player.controller.collisionFlags.minSlideSpeed = this.vel.y;
        }
    }

    // drawImage(img, sourceX, sourceY, sourceH, sourceW, canvasX, canvasY, width, height)
    draw(ctx) {
        const size = this.size;
        const drawPos = new Vector2(this.pos.x - size.x / 2, GAME_HEIGHT - this.pos.y - size.y);
        const drawSize = Block.BLOCK_UNIT;

        const maxRow = size.y / Block.BLOCK_UNIT;
        const maxCol = size.x / Block.BLOCK_UNIT;

        // draw block
        for (let i=0; i < maxRow; i++) {
            for (let j=0; j < maxCol; j++) {
                const drawOffsetX = drawSize * j;
                const drawOffsetY = drawSize * i;

                switch (i) {
                    case 0: // draw top
                        switch (j) {
                            case 0: // top left corner
                                ctx.drawImage(TILESET, 0, 0, TILE_SIZE, TILE_SIZE,
                                    drawPos.x - EXTRA, drawPos.y - EXTRA, drawSize + EXTRA * 2, drawSize + EXTRA * 2);
                                break;
                            case maxCol - 1: // top right corner
                                ctx.drawImage(TILESET, 32, 0, TILE_SIZE, TILE_SIZE,
                                    drawPos.x - EXTRA + drawOffsetX, drawPos.y - EXTRA, drawSize + EXTRA * 2, drawSize + EXTRA * 2);
                                break;
                            default: // top middle tiles
                                ctx.drawImage(TILESET, 16, 0, TILE_SIZE, TILE_SIZE,
                                    drawPos.x - EXTRA + drawOffsetX, drawPos.y - EXTRA, drawSize + EXTRA * 2, drawSize + EXTRA * 2);
                        }
                        break;
                    case maxRow - 1: // draw bottom
                        switch (j) {
                            case 0: // bottom left corner
                                ctx.drawImage(TILESET, 0, 32, TILE_SIZE, TILE_SIZE,
                                    drawPos.x - EXTRA, drawPos.y - EXTRA + drawOffsetY, drawSize + EXTRA * 2, drawSize + EXTRA * 2);
                                break;
                            case maxCol - 1: // bottom right corner
                                ctx.drawImage(TILESET, 32, 32, TILE_SIZE, TILE_SIZE,
                                    drawPos.x - EXTRA + drawOffsetX, drawPos.y - EXTRA + drawOffsetY, drawSize + EXTRA * 2, drawSize + EXTRA * 2);
                                break;
                            default: // bottom middle tiles
                                ctx.drawImage(TILESET, 16, 32, TILE_SIZE, TILE_SIZE,
                                    drawPos.x - EXTRA + drawOffsetX, drawPos.y - EXTRA + drawOffsetY, drawSize + EXTRA * 2, drawSize + EXTRA * 2);
                        }
                        break;
                    default: // everything else
                        switch (j) {
                            case 0: // bottom left corner
                                ctx.drawImage(TILESET, 0, 16, TILE_SIZE, TILE_SIZE,
                                    drawPos.x - EXTRA, drawPos.y - EXTRA + drawOffsetY, drawSize + EXTRA * 2, drawSize + EXTRA * 2);
                                break;
                            case maxCol - 1: // bottom right corner
                                ctx.drawImage(TILESET, 32, 16, TILE_SIZE, TILE_SIZE,
                                    drawPos.x - EXTRA + drawOffsetX, drawPos.y - EXTRA + drawOffsetY, drawSize + EXTRA * 2, drawSize + EXTRA * 2);
                                break;
                            default: // bottom middle tiles
                                ctx.drawImage(TILESET, 16, 16, TILE_SIZE, TILE_SIZE,
                                    drawPos.x - EXTRA + drawOffsetX, drawPos.y - EXTRA + drawOffsetY, drawSize + EXTRA * 2, drawSize + EXTRA * 2);
                        }
                }
            }
        }

        // draw hitbox
        // ctx.strokeStyle = 'red';
        // ctx.strokeRect(drawPos.x, drawPos.y, size.x, size.y);
    }
}

Block.BLOCK_UNIT = 25;
Block.BLOCK_SIZES = [
    new Vector2(2, 4).scale(Block.BLOCK_UNIT),
    new Vector2(4, 4).scale(Block.BLOCK_UNIT),
    new Vector2(6, 4).scale(Block.BLOCK_UNIT),
    new Vector2(4, 8).scale(Block.BLOCK_UNIT),
    new Vector2(6, 6).scale(Block.BLOCK_UNIT),
    new Vector2(8, 4).scale(Block.BLOCK_UNIT)
];
Block.BLOCK_SPEEDS = [
    50, 75, 100, 125, 150
]
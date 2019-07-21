import {
    GAME_WIDTH,
    GAME_HEIGHT,
    PLAYER_WIDTH,
    PLAYER_HEIGHT
} from './constants';
import { Time } from './util/util';
import Vector2 from './util/vector2';

import Player from './player';
import Block from './block';

const BLOCK_UNIT = 50;
const BLOCK_SIZES = [
    new Vector2(1, 2).scale(BLOCK_UNIT),
    new Vector2(2, 2).scale(BLOCK_UNIT),
    new Vector2(3, 2).scale(BLOCK_UNIT),
    new Vector2(2, 4).scale(BLOCK_UNIT),
    new Vector2(3, 3).scale(BLOCK_UNIT),
    new Vector2(4, 2).scale(BLOCK_UNIT)
];

export default class Game {
    constructor() {
        // create player
        this.player = new Player({
            game: this,
            size: new Vector2(PLAYER_WIDTH, PLAYER_HEIGHT)
        });

        // create floor
        const floor = new Block({
            game: this,
            pos: new Vector2(GAME_WIDTH / 2, 0),
            size: new Vector2(GAME_WIDTH, 64),
            vel: new Vector2(0, 0)
        });

        this.blocks = [floor];
        this.lastBlockTime = 0;
        this.blocksPerSecond = 1;

        // create wall - for testing wallslide
        const wall = new Block({
            game: this,
            pos: new Vector2(0, 0),
            size: new Vector2(50, GAME_HEIGHT),
            vel: new Vector2(0, 0)
        });
        this.blocks.push(wall);
    }

    checkCollisions(moveAmount) {
        this.blocks.forEach(block => block.willCollideWith(this.player, moveAmount));
    }

    draw(ctx) {
        this.blocks.forEach(block => block.draw(ctx));
        this.player.draw(ctx);
    }

    step() {
        if (this.lastBlockTime < 1 / this.blocksPerSecond) {
            this.lastBlockTime += Time.deltaTime;
        } else {
            this._generateBlock();
            this.lastBlockTime = 0;
        }

        this.player.move();
        this.blocks.forEach(block => block.move());
    }

    _generateBlock() {
        const randomSize = Math.floor(Math.random() * BLOCK_SIZES.length);
        const size = BLOCK_SIZES[randomSize];

        const randomX = Math.floor(Math.random() * GAME_WIDTH / (BLOCK_UNIT)) * (BLOCK_UNIT) + size.x / 2
        const pos = new Vector2(
            randomX, GAME_HEIGHT + size.y
        );

        const vel = new Vector2(
            0, -Math.floor(Math.random() * 50 + 100)
        );

        this.blocks.push(new Block({ game: this, size, pos, vel }));
    }

    isOffScreen(pos, size) {
        return pos + size < 0;
    }

    remove(obj) {
        if (obj instanceof Block) {
            this.blocks.splice(this.blocks.indexOf(obj), 1);
        }
    }

    end() {
        // TODO
    }
}
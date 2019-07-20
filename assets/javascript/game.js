import {
    GAME_WIDTH,
    GAME_HEIGHT,
    PLAYER_WIDTH,
    PLAYER_HEIGHT
} from './constants';
import Vector2 from './util/vector2';

import Player from './player';
import Block from './block';

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
        this.blocksPerSecond = 1.5;

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

    step(deltaTime) {
        if (this.lastBlockTime < 1 / this.blocksPerSecond) {
            this.lastBlockTime += deltaTime;
        } else {
            this._generateBlock();
            this.lastBlockTime = 0;
        }

        this.player.move(deltaTime);
        this.blocks.forEach(block => block.move(deltaTime));
    }

    _generateBlock() {
        const unit = 50;
        const size = new Vector2(
            Math.floor(Math.random() * 5 + 1) * unit,
            Math.floor(Math.random() * 3 + 1) * unit
        );
        const pos = new Vector2(
            Math.floor(Math.random() * GAME_WIDTH / (unit * 2)) * (unit * 2) + size.x / 2,
            GAME_HEIGHT + size.y
        );
        const vel = new Vector2(
            0, -Math.floor(Math.random() * 50 + 100)
        );
        // this.blocks.push(new Block({ game: this, size, pos, vel }));
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
import {
    GAME_WIDTH,
    GAME_HEIGHT,
    PLAYER_WIDTH,
    PLAYER_HEIGHT
} from './constants';
import { Time, lerp } from './util/util';
import Vector2 from './util/vector2';

import Player from './player';
import Block from './block';

const BLOCK_SIZES = Block.BLOCK_SIZES;
const BLOCK_UNIT = Block.BLOCK_UNIT;

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
            size: new Vector2(GAME_WIDTH, 50),
            vel: new Vector2(0, 0)
        });

        this.blocks = [floor];
        this.lastBlockTime = 0;
        this.blocksPerSecond = 1;

        // create wall - for testing wallslide
        // const wall = new Block({
        //     game: this,
        //     pos: new Vector2(25, 0),
        //     size: new Vector2(50, GAME_HEIGHT),
        //     vel: new Vector2(0, 0)
        // });
        // this.blocks.push(wall);

        // set start scroll height
        this.scrollHeight = Game.BASE_SCROLL_HEIGHT;

        // set start height
        this.topHeight = 0;
    }

    checkCollisions(moveAmount) {
        this.blocks.forEach(block => block.willCollideWith(this.player, moveAmount));
    }

    draw(ctx) {
        const scrollOffset = this.scrollHeight - Game.BASE_SCROLL_HEIGHT;
        
        ctx.save();
        ctx.translate(0, scrollOffset);

        this.player.draw(ctx, scrollOffset);
        this.blocks.forEach(block => block.draw(ctx, scrollOffset));

        ctx.restore();

        if (this.scrollHeight < this.player.pos.y) {
            this.scrollHeight = Math.round(lerp(this.player.pos.y, this.scrollHeight, 500));
        }
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

        this.blocksPerSecond = (this.scrollHeight + 1200) / 1000

        if (this.topHeight < this.player.pos.y) {
            this.topHeight = this.player.pos.y;
        }
    }

    _generateBlock() {
        const scrollOffset = this.scrollHeight - Game.BASE_SCROLL_HEIGHT;
        const randomSize = Math.floor(Math.random() * BLOCK_SIZES.length);
        const size = BLOCK_SIZES[randomSize];

        let randCol;
        do {
            randCol = Math.floor(Math.random() * GAME_WIDTH / (BLOCK_UNIT * 2));
        } while (randCol == this.lastCol);
        this.lastCol = randCol;

        const randomX = randCol * (BLOCK_UNIT * 2) + size.x / 2

        const pos = new Vector2(
            randomX, GAME_HEIGHT + size.y + scrollOffset
        );

        const vel = new Vector2(
            0, -Math.floor(Math.random() * 50 + 150)
        );

        this.blocks.push(new Block({ game: this, size, pos, vel }));
    }

    isOffScreen(pos, size) {
        return pos + size + 50 < this.scrollHeight - Game.BASE_SCROLL_HEIGHT;
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

Game.BASE_SCROLL_HEIGHT = GAME_HEIGHT / 3;
import {
    GAME_WIDTH, GAME_HEIGHT,
    PLAYER_WIDTH, PLAYER_HEIGHT
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
            vel: Vector2.zero
        });

        this.blocks = [floor];
    }

    checkCollisions(moveAmount) {
        this.blocks.forEach(block => block.willCollideWith(this.player, moveAmount));
    }

    draw(ctx) {
        this.player.draw(ctx);
        this.blocks.forEach(block => block.draw(ctx));
    }

    step(deltaTime) {
        this.player.move(deltaTime);
    }

    end() {
        // TODO
    }
}
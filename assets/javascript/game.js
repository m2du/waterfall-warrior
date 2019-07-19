import Player from './player';

export default class Game {
    constructor() {
        this.player = new Player({});
    }

    draw(ctx) {
        this.player.draw(ctx);
    }

    step(deltaTime) {
        this.player.move(deltaTime);
    }

    end() {
        // TODO
    }
}
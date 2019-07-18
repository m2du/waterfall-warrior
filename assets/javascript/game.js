export default class Game {
    constructor() {

    }

    draw(ctx) {
        let bg = ctx.createLinearGradient(0, 0, 0, ctx.canvas.clientHeight);
        bg.addColorStop(1, '#66A6FF');
        bg.addColorStop(0, '#89F7FE');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
    }

    step(deltaTime) {
        // update game state
    }
}

Game.WIDTH = 600;
Game.HEIGHT = 900;
export default class GameView {
    constructor(game, ctx) {
        this.ctx = ctx;
        this.game = game;

        this.animate = this.animate.bind(this);
    }

    start() {
        this.lastTime = 0;
        requestAnimationFrame(this.animate);
    }

    animate(time) {
        const deltaTime = (time - this.lastTime) / 1000;
        
        this.game.step(deltaTime);
        this.game.draw(this.ctx);
        this.lastTime = time;

        requestAnimationFrame(this.animate);
    }

    bindKeyHandlers() {
        // map player input to game logic
    }
}
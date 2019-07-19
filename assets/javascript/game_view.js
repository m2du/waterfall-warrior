export default class GameView {
    constructor(game, ctx) {
        this.ctx = ctx;
        this.game = game;

        // waterfall animation setup
        this.waterbar = new Image();
        this.waterbar.src = '../assets/images/waterfall_sprite_sheet.png';
        this.waterfallSpeed = .6;
        this.waterfallFrames = 6;
        this.lastFrameTime = 0;
        this.frame = 0;

        this.animate = this.animate.bind(this);
    }

    start() {
        this.lastTime = 0;
        requestAnimationFrame(this.animate);
    }

    animate(time) {
        const deltaTime = (time - this.lastTime) / 1000;

        this.game.step(deltaTime);

        // draw next frame
        this.drawBg(deltaTime);
        this.game.draw(this.ctx);
        this.lastTime = time;

        requestAnimationFrame(this.animate);
    }

    drawBg(deltaTime) {
        const ctx = this.ctx;
        // let bg = ctx.createLinearGradient(0, 0, 0, ctx.canvas.clientHeight);
        // bg.addColorStop(1, '#66A6FF');
        // bg.addColorStop(0, '#89F7FE');
        ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
        ctx.fillStyle = '#66A6FF';
        ctx.fillRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);

        if (this.lastFrameTime < this.waterfallSpeed / this.waterfallFrames) {
            this.lastFrameTime += deltaTime;
        } else {
            this.frame = (this.frame + 1) % this.waterfallFrames;
            this.lastFrameTime = 0;
        }

        // img, sourceX, sourceY, sourceH, sourceW, canvasX, canvasY, width, height
        ctx.drawImage(this.waterbar, 620 * this.frame, 0, 620, 900,
            -10, 0, 720, 850);
    }

    bindKeyHandlers() {
        // map player input to game logic
    }
}
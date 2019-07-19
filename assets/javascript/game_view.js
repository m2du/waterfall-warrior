export default class GameView {
    constructor(game, ctx) {
        this.ctx = ctx;
        this.game = game;

        // waterfall animation setup
        this.waterbar = new Image();
        this.waterbar.src = '../assets/images/waterbar.png';
        this.barHeight = 35;
        this.waterfallSpeed = 800;
        this.y1 = 460;
        this.y2 = -35;

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
        ctx.fillStyle = '#66A6FF';
        ctx.fillRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);


        // img, sourceX, sourceY, sourceH, sourceW, canvasX, canvasY, width, height
        ctx.drawImage(this.waterbar, 0, 0, 600, this.barHeight,
            0, Math.round(this.y1), 700, this.barHeight);
        ctx.drawImage(this.waterbar, 0, 0, 600, this.barHeight,
            0, Math.round(this.y2), 700, this.barHeight);

        this.y1 += this.waterfallSpeed * deltaTime;
        this.y2 += this.waterfallSpeed * deltaTime;

        if (this.y1 > 850) this.y1 = -121;
        if (this.y2 > 850) this.y2 = -121;
    }

    bindKeyHandlers() {
        // map player input to game logic
    }
}
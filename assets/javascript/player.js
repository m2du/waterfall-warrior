import MovingObject from "./moving_object";
import Game from './game';
import Vector2 from './util/vector2';
import AnimationManager from './util/animation_manager';

export default class Player extends MovingObject {
    constructor(options) {
        super(options);

        this.pos = new Vector2(Game.WIDTH / 2, 0);

        this.image = new Image();
        this.image.src = '../assets/images/character_sheet.png';
        this.animationManager = new AnimationManager();
    }

    draw(ctx) {
        // img, sourceX, sourceY, sourceH, sourceW, canvasX, canvasY, width, height
        ctx.drawImage(this.image, ...this.animationManager.sprite, 100, 74,
             Game.WIDTH - this.pos.x - Player.DRAW_WIDTH / 2, 
             Game.HEIGHT - this.pos.y - Player.DRAW_HEIGHT, 80, 59);
    }

    move(deltaTime) {
        this.animationManager.idle(deltaTime);
    }

    remove() {
        this.game.end();
    }
}

Player.DRAW_WIDTH = 80;
Player.DRAW_HEIGHT = 59;
import MovingObject from "./moving_object";
import Game from './game';
import Vector2 from './util/vector2';
import InputManager from './movement/input_manager';
import PlayerState from './movement/state/player_state';
import AnimationManager from './util/animation_manager';

export default class Player extends MovingObject {
    constructor(options) {
        super(options);

        this.pos = new Vector2(Game.WIDTH / 2, 100);

        this.inputManager = new InputManager(this);

        this.imageRight = new Image();
        this.imageRight.src = '../assets/images/character_sheet_right.png';
        this.imageLeft = new Image();
        this.imageLeft.src = '../assets/images/character_sheet_left.png';
        this.animationManager = new AnimationManager();
        PlayerState.animator = this.animationManager;
    }

    draw(ctx) {
        // img, sourceX, sourceY, sourceH, sourceW, canvasX, canvasY, width, height
        ctx.drawImage(this.imageRight, ...this.animationManager.sprite, 100, 74,
             Game.WIDTH - this.pos.x - Player.DRAW_WIDTH / 2, 
             Game.HEIGHT - this.pos.y - Player.DRAW_HEIGHT, 80, 59);
    }

    move(deltaTime) {
        const inputFlags = this.inputManager.inputFlags;
        console.log(inputFlags);
        this.animationManager.idle(deltaTime);
    }

    remove() {
        this.game.end();
    }
}

Player.DRAW_WIDTH = 80;
Player.DRAW_HEIGHT = 59;
import Vector2 from './util/vector2';
import MovingObject from "./moving_object";
import Game from './game';

import PlayerState from './movement/state/player_state';
import PlayerController from './movement/player_controller';
import InputManager from './movement/input_manager';

import AnimationManager from './util/animation_manager';

export default class Player extends MovingObject {
    constructor(options) {
        super(options);
        this.pos = new Vector2(Game.WIDTH / 2, 100);
        this.vel = Vector2.zero;

        this.initMovementAndState();
        this.initDrawAndAnimation();
    }

    draw(ctx) {
        // img, sourceX, sourceY, sourceH, sourceW, canvasX, canvasY, width, height
        ctx.drawImage(this.imageRight, ...this.animationManager.sprite, 100, 74,
            Game.WIDTH - this.pos.x - Player.DRAW_WIDTH / 2,
            Game.HEIGHT - this.pos.y - Player.DRAW_HEIGHT, 80, 59);
    }

    move(deltaTime) {
        const inputFlags = this.inputManager.inputFlags;
        this.currentState = this.currentState.handleInput(this.controller, inputFlags);

        // process state with current inputs
        this.currentState.handleUpdate(this.controller, inputFlags);

        // move player with controller
        this.controller.move(deltaTime);
        console.log(this.pos);
        console.log(this.vel);

        // update animation
        this.animationManager.idle(deltaTime);
    }

    remove() {
        this.game.end();
    }

    initMovementAndState() {
        this.inputManager = new InputManager(this);
        this.controller = new PlayerController(this);
        this.currentState = PlayerState.IDLE;
    }

    initDrawAndAnimation() {
        this.imageRight = new Image();
        this.imageRight.src = '../assets/images/character_sheet_right.png';
        this.imageLeft = new Image();
        this.imageLeft.src = '../assets/images/character_sheet_left.png';
        this.animationManager = new AnimationManager();
        PlayerState.animator = this.animationManager;
    }
}

Player.DRAW_WIDTH = 80;
Player.DRAW_HEIGHT = 59;
Player.WIDTH = 80;
Player.HEIGHT = 59;
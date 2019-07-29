import {
    GAME_WIDTH,
    GAME_HEIGHT,
    PLAYER_DRAW_WIDTH,
    PLAYER_DRAW_HEIGHT,
    PLAYER_WIDTH,
    PLAYER_HEIGHT
} from './constants';
import Vector2 from './util/vector2';
import MovingObject from "./moving_object";

import PlayerState from './movement/state/player_state';
import PlayerController from './movement/player_controller';

import AnimationManager from './util/animation_manager';
import SoundManager from './util/sound_manager';

export default class Player extends MovingObject {
    constructor(options) {
        super(options);
        this.pos = new Vector2(GAME_WIDTH / 2, 75);
        this.vel = new Vector2(0, 0);
        this.inputManager = options.inputManager;

        this.initMovementAndState();
        this.initDrawAndAnimation();
    }

    draw(ctx) {
        const drawX = this.pos.x - PLAYER_DRAW_WIDTH / 2;
        const drawY = GAME_HEIGHT - this.pos.y - PLAYER_DRAW_HEIGHT;

        // img, sourceX, sourceY, sourceH, sourceW, canvasX, canvasY, width, height
        if (this.facing === 1) {
            ctx.drawImage(this.imageRight, ...this.animationManager.sprite, 100, 74,
                drawX, drawY, 80, 59);
        } else {
            ctx.drawImage(this.imageLeft, ...this.animationManager.sprite, 100, 74,
                drawX, drawY, 80, 59);
        }


        // draw player hitbox
        // ctx.strokeStyle = 'red';
        // ctx.strokeRect(this.pos.x - this.size.x / 2,
        //     GAME_HEIGHT - this.pos.y - this.size.y, this.size.x, this.size.y);
    }

    move() {
        // get current inputs
        const inputFlags = this.inputManager.inputFlags;

        // update state based on current inputs
        this.currentState = this.currentState.handleInput(this.controller, inputFlags);

        // play jump sfx if new jump
        if (this.currentState.name === 'JUMPING' && this.game.sfxOn) {
            SoundManager.jumpSFX.play();
        }

        // process state with current inputs
        this.currentState.handleUpdate(this.controller, inputFlags);

        // move player with controller
        this.controller.move();

        // update animation
        this.updateAnimation(inputFlags.dirX);

        // check game over
        if (this.game.isOffScreen(this.pos.y, this.size.y) ||
            this.controller.gotSquished()) {
            this.dead();
        }
    }

    updateAnimation(dirX) {
        this.facing = (dirX != 0) ? dirX : this.facing;

        switch (this.currentState.name) {
            case "WALKING":
                this.animationManager.walk(this.facing);
                break;
            case "RISING":
                this.animationManager.jump(this.facing);
                break;
            case "FALLING":
                this.animationManager.fall(this.facing);
                break;
            case "ROLLING":
                this.animationManager.roll(this.facing);
                break;
            case "WALLSLIDING":
                this.facing = this.controller.wallDirection();
                this.animationManager.wallslide(this.facing);
                break;
            default:
                this.animationManager.idle(this.facing);
        }
    }

    dead() {
        this.game.end();
    }

    initMovementAndState() {
        this.controller = new PlayerController(this);
        this.currentState = PlayerState.FALLING;
        this.facing = 1;
    }

    initDrawAndAnimation() {
        this.imageRight = new Image();
        this.imageRight.src = './assets/images/character_sheet_right.png';
        this.imageLeft = new Image();
        this.imageLeft.src = './assets/images/character_sheet_left.png';
        this.animationManager = new AnimationManager();
        PlayerState.animator = this.animationManager;
    }
}
import { PLAYER_SPRITE_WIDTH, PLAYER_SPRITE_HEIGHT } from '../constants';

export default class AnimationManager {
    constructor() {
        this.direction = 1;
        this.frame = 0;
        this.lastFrameTime = 0;

        // idle animation start frames
        this.idleBaseRight = [this._framesFromLeft(0), this._framesFromTop(0)];
        this.idleBaseLeft = [this._framesFromRight(0), this._framesFromTop(0)];

        // walk animation start frames
        this.walkBaseRight = [this._framesFromLeft(1), this._framesFromTop(1)];
        this.walkBaseLeft = [this._framesFromRight(1), this._framesFromTop(1)];

        // jump animation start frames
        this.jumpBaseRight = [this._framesFromLeft(2), this._framesFromTop(2)];
        this.jumpBaseLeft = [this._framesFromRight(2), this._framesFromTop(2)];

        // fall animation start frames
        this.fallBaseRight = [this._framesFromLeft(1), this._framesFromTop(3)];
        this.fallBaseLeft = [this._framesFromRight(1), this._framesFromTop(3)];

        // set start animation frame
        this.sprite = [0, 0];
        this.currentAnim = "IDLE";
    }

    idle(deltaTime, direction) {
        const name = "IDLE";
        const duration = 0.65;
        const numFrames = 4;
        this._step(deltaTime, duration, numFrames, name);

        if (direction === 1) {
            this.sprite[0] = this.idleBaseRight[0] + PLAYER_SPRITE_WIDTH * this.frame;
            this.sprite[1] = this.idleBaseRight[1];
        } else {
            this.sprite[0] = this.idleBaseLeft[0] - PLAYER_SPRITE_WIDTH * this.frame;
            this.sprite[1] = this.idleBaseLeft[1];
        }
    }

    walk(deltaTime, direction) {
        const name = "WALK";
        const duration = 0.65;
        const numFrames = 6;
        this._step(deltaTime, duration, numFrames, name);

        if (direction === 1) {
            this.sprite[0] = this.walkBaseRight[0] + PLAYER_SPRITE_WIDTH * this.frame;
            this.sprite[1] = this.walkBaseRight[1];
        } else {
            this.sprite[0] = this.walkBaseLeft[0] - PLAYER_SPRITE_WIDTH * this.frame;
            this.sprite[1] = this.walkBaseLeft[1];
        }
    }

    jump(deltaTime, direction) {
        const name = "JUMP";
        const duration = .4;
        const numFrames = 2;
        this._step(deltaTime, duration, numFrames, name);

        if (direction === 1) {
            this.sprite[0] = this.jumpBaseRight[0] + PLAYER_SPRITE_WIDTH * this.frame;
            this.sprite[1] = this.jumpBaseRight[1];
        } else {
            this.sprite[0] = this.jumpBaseLeft[0] - PLAYER_SPRITE_WIDTH * this.frame;
            this.sprite[1] = this.jumpBaseLeft[1];
        }

        console.log('jump');
        console.log(this.sprite);
    }

    fall(deltaTime, direction) {
        const name = "FALL";
        const duration = .2;
        const numFrames = 2;
        this._step(deltaTime, duration, numFrames, name);

        if (direction === 1) {
            this.sprite[0] = this.fallBaseRight[0] + PLAYER_SPRITE_WIDTH * this.frame;
            this.sprite[1] = this.fallBaseRight[1];
        } else {
            this.sprite[0] = this.fallBaseLeft[0] - PLAYER_SPRITE_WIDTH * this.frame;
            this.sprite[1] = this.fallBaseLeft[1];
        }

        console.log('fall');
        console.log(this.sprite);
    }

    _step(deltaTime, duration, numFrames, name) {
        if (name !== this.currentAnim) {
            this.frame = 0;
            this.lastFrameTime = 0;
            this.currentAnim = name;
        }

        if (this.lastFrameTime < duration / numFrames) {
            this.lastFrameTime += deltaTime;
        } else {
            this.frame = (this.frame + 1) % numFrames;
            this.lastFrameTime = 0;
        }
    }

    _framesFromLeft(n) {
        return PLAYER_SPRITE_WIDTH * n;
    }

    _framesFromRight(n) {
        return 770 - PLAYER_SPRITE_WIDTH * (n + 1);
    }

    _framesFromTop(n) {
        return PLAYER_SPRITE_HEIGHT * n;
    }
}
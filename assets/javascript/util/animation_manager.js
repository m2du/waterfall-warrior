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

        // set start animation frame
        this.sprite = [0, 0];
    }

    idle(deltaTime, direction) {
        const duration = 0.65;
        const numFrames = 4;
        this._step(deltaTime, duration, numFrames);

        if (direction === 1) {
            this.sprite[0] = this.idleBaseRight[0] + PLAYER_SPRITE_WIDTH * this.frame;
            this.sprite[1] = this.idleBaseRight[1];
        } else {
            this.sprite[0] = this.idleBaseLeft[0] - PLAYER_SPRITE_WIDTH * this.frame;
            this.sprite[1] = this.idleBaseLeft[1];
        }
    }

    walk(deltaTime, direction) {
        const duration = 0.65;
        const numFrames = 6;
        this._step(deltaTime, duration, numFrames);

        if (direction === 1) {
            this.sprite[0] = this.walkBaseRight[0] + PLAYER_SPRITE_WIDTH * this.frame;
            this.sprite[1] = this.walkBaseRight[1];
        } else {
            this.sprite[0] = this.walkBaseLeft[0] - PLAYER_SPRITE_WIDTH * this.frame;
            this.sprite[1] = this.walkBaseLeft[1];
        }
    }

    _step(deltaTime, duration, numFrames) {
        if (this.lastFrameTime < duration / numFrames) {
            this.lastFrameTime += deltaTime;
        } else {
            this.frame = (this.frame + 1) % numFrames;
            this.lastFrameTime = 0;
        }
    }

    resetFrame() {
        this.frame = 0;
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
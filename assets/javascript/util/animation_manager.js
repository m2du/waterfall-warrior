export default class AnimationManager {
    constructor() {
        this.frame = 0;
        this.lastFrameTime = 0;

        this.idleBase = [0, 0];
        this.currentAnim = 'IDLE';
        this.sprite = [0, 0];
    }

    idle(deltaTime) {
        const duration = 0.65;
        const numFrames = 4;
        this.step(deltaTime, duration, numFrames);

        this.sprite[0] = this.idleBase[0] + 100 * this.frame;
        this.sprite[1] = this.idleBase[1];
    }

    step(deltaTime, duration, numFrames) {
        if (this.lastFrameTime < duration / numFrames) {
            this.lastFrameTime += deltaTime;
        } else {
            this.frame = (this.frame + 1) % numFrames;
            this.lastFrameTime = 0;
        }
    }
}
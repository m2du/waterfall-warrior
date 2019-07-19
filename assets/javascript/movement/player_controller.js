import {
    GAME_WIDTH, GAME_HEIGHT,
    PLAYER_WIDTH, PLAYER_HEIGHT
} from '../constants';
import Vector2 from '../util/vector2';

export default class PlayerController {
    constructor(player) {
        this.player = player;
        this.pos = player.pos;
        this.vel = player.vel;

        const walkSpeed = GAME_WIDTH * 0.3;
        const jumpHeight = PLAYER_HEIGHT * 1.5;
        const jumpDist = PLAYER_WIDTH * 5;
        const jumpVel = (2 * walkSpeed * jumpHeight) / (jumpDist / 2);
        const gravity = (-2 * jumpHeight * Math.pow(walkSpeed, 2)) / Math.pow(jumpDist / 2, 2);

        this.walkSpeed = walkSpeed;
        this.jumpVel = jumpVel;
        this.gravity = gravity;
    }

    idle() {
        this.vel.x = 0;
    }

    walk(inputFlags) {
        this.vel.x = inputFlags.dirX * this.walkSpeed;
    }

    jump() {
        this.grounded = false;
        this.vel.y = this.jumpVel;
    }

    airborne(inputFlags) {
        this.vel.x = inputFlags.dirX * this.walkSpeed;
    }

    move(deltaTime) {
        // apply gravity
        this.vel.y += this.gravity * deltaTime;
        if (this.vel.y < MAX_FALL_SPEED) {
            this.vel.y = MAX_FALL_SPEED;
        }

        // calc movement vector
        const moveAmount = new Vector2(this.vel.x * deltaTime, this.vel.y * deltaTime);

        // check collisions
        // TODO

        // apply movement
        this.pos.add(moveAmount);

        // reset vertical velocity if grounded
        if (this.pos.y <= 0) {
            this.grounded = true;
            this.pos.y = 0;
            this.vel.y = 0;
        }
    }

    isRising() {
        return this.vel.y > 0;
    }
}

const MAX_FALL_SPEED = -400;
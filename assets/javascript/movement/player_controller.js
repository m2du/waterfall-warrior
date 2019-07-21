import {
    GAME_WIDTH,
    GAME_HEIGHT,
    PLAYER_WIDTH,
    PLAYER_HEIGHT
} from '../constants';
import { Time } from '../util/util';
import Vector2 from '../util/vector2';

export default class PlayerController {
    constructor(player) {
        this.player = player;
        this.pos = player.pos;
        this.vel = player.vel;

        const walkSpeed = GAME_WIDTH * 0.3;
        const jumpHeight = PLAYER_HEIGHT * 2;
        const jumpDist = PLAYER_WIDTH * 5;
        const jumpVel = (2 * walkSpeed * jumpHeight) / (jumpDist / 2);
        const gravity = (-2 * jumpHeight * Math.pow(walkSpeed, 2)) / Math.pow(jumpDist / 2, 2);

        this.walkSpeed = walkSpeed;
        this.jumpVel = jumpVel;
        this.gravity = gravity;
        this.jumps = 2;
        this.rolling = false;


        this.collisionFlags = {
            above: false,
            below: false,
            left: false,
            right: false
        };
    }

    idle(inputFlags) {
        this.inputFlags = inputFlags;
        this.vel.x = 0;
    }

    walk(inputFlags) {
        this.inputFlags = inputFlags;
        this.vel.x = inputFlags.dirX * this.walkSpeed;
    }

    jump(inputFlags) {
        this.inputFlags = inputFlags;
        inputFlags.newJump = false;

        if (this.jumps > 0) {
            if (this.jumps === 1) {
                this.rolling = true;
            }

            this.jumps--;
            this.vel.y = this.jumpVel;
        }
    }

    wallAction(inputFlags, action) {
        this.inputFlags = inputFlags;
        this.wallsliding = true;
        this.rolling = false;
        console.log(action);
        switch(action) {
            case "LEAP":
                this.vel.x = inputFlags.dirX * this.walkSpeed;
                this.vel.y = WALL_LEAP_VEL;
                this.inputFlags.newJump = false;
                this.jumps++;
                break;
            case "DROP":
                this.vel.x = -this.wallDirection() * WALL_DROP_SPEED;
                this.inputFlags.newJump = false;
                this.jumps++;
                break;
        }
    }

    airborne(inputFlags) {
        this.inputFlags = inputFlags;
        this.vel.x = inputFlags.dirX * this.walkSpeed;
    }

    move() {
        const deltaTime = Time.deltaTime;

        // apply gravity
        this.vel.y += this.gravity * deltaTime;
        if (this.vel.y < MAX_FALL_SPEED) {
            this.vel.y = MAX_FALL_SPEED;
        }

        // check if wallsliding
        if (this.wallsliding && this.vel.y < WALLSLIDE_MAX_SPEED) {
            this.vel.y = WALLSLIDE_MAX_SPEED;
        }

        // calc movement vector
        const moveAmount = new Vector2(this.vel.x * deltaTime, this.vel.y * deltaTime);

        // check collisions
        this._resetCollisionFlags();
        this.player.game.checkCollisions(moveAmount);

        // apply movement
        this.pos.add(moveAmount);

        // prevet movement off sides of screen
        if (this.pos.x - PLAYER_WIDTH / 2 <= 0) {
            this.pos.x = PLAYER_WIDTH / 2;
        } else if (this.pos.x + PLAYER_WIDTH / 2 >= GAME_WIDTH) {
            this.pos.x = GAME_WIDTH - PLAYER_WIDTH / 2;
        }

        if (this.isGrounded()) {
            this.jumps = 2;
            this.rolling = false;
        }

        // reset flags
        this.wallsliding = false;
    }

    wallDirection() {
        if (this.collisionFlags.left) return -1;
        if (this.collisionFlags.right) return 1;
        return 0;
    }

    isGrounded() {
        return this.collisionFlags.below;
    }

    isRising() {
        return this.vel.y > 0;
    }

    isRolling() {
        if (this.vel.y < MAX_FALL_SPEED) {
            this.rolling = false;
        }

        return this.rolling;
    }

    shrink() {
        this.player.size.y = PLAYER_HEIGHT * 0.8;
    }

    grow() {
        this.player.size.y = PLAYER_HEIGHT;
    }

    _resetCollisionFlags() {
        this.collisionFlags.above = false;
        this.collisionFlags.below = false;
        this.collisionFlags.left = false;
        this.collisionFlags.right = false;
    }
}

const MAX_FALL_SPEED = -400;
const WALLSLIDE_MAX_SPEED = -75;
const WALL_LEAP_VEL = 500;
const WALL_DROP_SPEED = 50;
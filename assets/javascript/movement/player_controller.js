import {
    GAME_WIDTH,
    GAME_HEIGHT,
    PLAYER_WIDTH,
    PLAYER_HEIGHT
} from '../constants';
import { Time, lerp } from '../util/util';
import Vector2 from '../util/vector2';

const WALK_SPEED = GAME_WIDTH * 0.3;
const JUMP_HEIGHT = PLAYER_HEIGHT * 2;
const JUMP_DIST = PLAYER_WIDTH * 5;
const JUMP_VEL = (2 * WALK_SPEED * JUMP_HEIGHT) / (JUMP_DIST / 2);
const GRAVITY = (-2 * JUMP_HEIGHT * Math.pow(WALK_SPEED, 2)) / Math.pow(JUMP_DIST / 2, 2);

const MAX_FALL_SPEED = -400;
const WALLSLIDE_MAX_SPEED = -75;
const WALL_CLIMB_VEL = new Vector2(WALK_SPEED * .4, JUMP_VEL * .8);
const WALL_LEAP_VEL = new Vector2(WALK_SPEED * 1.5, JUMP_VEL);
const WALL_DROP_VEL = new Vector2(WALK_SPEED, JUMP_HEIGHT * .25);
const GROUND_SMOOTHING = 1200;
const AIR_SMOOTHING = 800;

export default class PlayerController {
    constructor(player) {
        this.player = player;
        this.pos = player.pos;
        this.vel = player.vel;

        this.walkSpeed = WALK_SPEED;
        this.jumpVel = JUMP_VEL;
        this.gravity = GRAVITY;
        this.jumps = 2;
        this.rolling = false;
        this.rollHeight = 0;

        this.collisionFlags = {
            above: false,
            below: false,
            left: false,
            right: false,
            minSlideSpeed: WALLSLIDE_MAX_SPEED
        };
    }

    idle(inputFlags) {
        this.inputFlags = inputFlags;
        this.vel.x = lerp(0, this.vel.x, GROUND_SMOOTHING);
    }

    walk(inputFlags) {
        this.inputFlags = inputFlags;
        this.vel.x = lerp(inputFlags.dirX * this.walkSpeed, this.vel.x, GROUND_SMOOTHING);
    }

    jump(inputFlags) {
        this.inputFlags = inputFlags;
        inputFlags.newJump = false;

        if (this.jumps > 0) {
            if (this.jumps === 1) {
                this.rolling = true;
                this.rollHeight = this.pos.y;
            }

            this.jumps--;
            this.vel.y = this.jumpVel;
            this.vel.x = inputFlags.dirX * this.walkSpeed;
        }
    }

    wallAction(inputFlags, action) {
        this.inputFlags = inputFlags;
        this.wallsliding = true;
        this.rolling = false;
        
        switch(action) {
            case "CLIMB":
                this.wallsliding = false;
                this.vel.x = -inputFlags.dirX * WALL_CLIMB_VEL.x;
                this.vel.y = WALL_CLIMB_VEL.y;
                this.inputFlags.newJump = false;
                break;
            case "LEAP":
                this.wallsliding = false;
                this.vel.x = inputFlags.dirX * WALL_LEAP_VEL.x;
                this.vel.y = WALL_LEAP_VEL.y;
                this.inputFlags.newJump = false;
                this.jumps = 1;
                break;
            case "DROP":
                this.wallsliding = false;
                this.vel.x = -this.wallDirection() * WALL_DROP_VEL.x;
                this.vel.y = WALL_DROP_VEL.y;
                this.inputFlags.newJump = false;
                this.jumps = 1;
                break;
        }
    }

    airborne(inputFlags) {
        this.inputFlags = inputFlags;
        this.vel.x = lerp(inputFlags.dirX * this.walkSpeed, this.vel.x, AIR_SMOOTHING);
    }

    move() {
        const deltaTime = Time.deltaTime;

        // apply gravity
        this.vel.y += this.gravity * deltaTime;
        if (this.vel.y < MAX_FALL_SPEED) {
            this.vel.y = MAX_FALL_SPEED;
        }

        // check if wallsliding
        if (this.wallsliding) {
            if (this.vel.y > this.collisionFlags.minSlideSpeed && this.collisionFlags.minSlideSpeed < 0) {
                this.vel.y = lerp(this.collisionFlags.minSlideSpeed, this.vel.y, 1250);
            }

            const slideSpeedMax = WALLSLIDE_MAX_SPEED + this.collisionFlags.minSlideSpeed;
            if (this.vel.y < slideSpeedMax) {
                this.vel.y = slideSpeedMax;
            }
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

        if (this.pos.y < this.rollHeight) {
            this.rolling = false;
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
import Vector2 from '../util/vector2';

export default class PlayerController {
    constructor(player) {
        this.player = player;
        this.pos = player.pos;
        this.vel = player.vel;
    }

    idle() {
        this.vel.x = 0;
    }

    move(deltaTime) {
        
    }
}
import PlayerState from './player_state';

export default class JumpingState {
    constructor() {
        this.name = "JUMPING";
    }

    handleInput(controller, inputFlags) {
        return PlayerState.AIRBORNE;
    }

    handleUpdate(controller, inputFlags) {
        controller.jump();
    }
}
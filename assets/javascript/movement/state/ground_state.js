import PlayerState from './player_state';

class GroundState {
    constructor() {}

    handleInput(controller, inputFlags) {
        if (!controller.isGrounded()) {
            return PlayerState.FALLING;
        }

        if (inputFlags.jumpPressed) {
            return PlayerState.JUMPING;
        }

        if (inputFlags.dirX !== 0) {
            return PlayerState.WALKING;
        }

        return PlayerState.IDLE;
    }
}

export default GroundState;
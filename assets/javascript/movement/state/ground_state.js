import PlayerState from './player_state';

class GroundState {
    constructor() {}

    handleInput(controller, inputFlags) {
        // if (!controller.isGrounded()) {
        //     return PlayerState.airborne;
        // }

        if (inputFlags.jumpHeld) {
            inputFlags.jumpPressed = false;
            return PlayerState.JUMPING;
        }

        if (inputFlags.dirX !== 0) {
            return PlayerState.WALKING;
        }

        return PlayerState.IDLE;
    }
}

export default GroundState;
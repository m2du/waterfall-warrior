import PlayerState from './player_state';

class GroundState {
    constructor() {}

    handleInput(controller, inputFlags) {
        // if (!controller.isGrounded()) {
        //     return PlayerState.airborne;
        // }

        // if (inputFlags.jumpHeldDown) {
        //     return PlayerState.jumping;
        // }

        // if (inputFlags.dirX != 0) {
        //     return PlayerState.walking;
        // }

        return PlayerState.IDLE;
    }
}

export default GroundState;
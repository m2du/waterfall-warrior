import PlayerState from './player_state';

export default class AirborneState {
    constructor() {
        this.name = "AIRBORNE";
    }

    handleInput(controller, inputFlags) {
        if (controller.isGrounded()) {
            if (inputFlags.dirX !== 0) {
                return PlayerState.WALKING;
            }
            return PlayerState.IDLE;
        }

        if (controller.wallDirection() !== 0) {
            return PlayerState.WALLSLIDING;
        }

        if ((inputFlags.jumpPressed && inputFlags.newJump && controller.jumps > 0) || controller.isRolling()) {
            return PlayerState.ROLLING;
        }

        if (controller.isRising()) {
            return PlayerState.RISING;
        } else {
            return PlayerState.FALLING;
        }
    }

    handleUpdate(controller, inputFlags) {
        controller.airborne(inputFlags);
    }
}
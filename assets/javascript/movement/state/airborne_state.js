import PlayerState from './player_state';

export default class AirborneState {
    constructor() {
        this.name = "AIRBORNE";
    }

    handleInput(controller, inputFlags) {
        if (controller.grounded) {
            if (inputFlags.dirX !== 0) {
                return PlayerState.WALKING;
            }
            return PlayerState.IDLE;
        }

        // console.log(inputFlags);
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
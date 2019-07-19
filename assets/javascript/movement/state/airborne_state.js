import PlayerState from './player_state';

export default class AirborneState {
    constructor() {}

    handleInput(controller, inputFlags) {
        if (controller.grounded) {
            if (inputFlags.dirX !== 0) {
                return PlayerState.WALKING;
            }
            return PlayerState.IDLE;
        }

        return PlayerState.AIRBORNE;
    }

    handleUpdate(controller, inputFlags) {
        controller.airborne(inputFlags);
    }
}
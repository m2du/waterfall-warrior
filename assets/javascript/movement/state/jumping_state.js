import PlayerState from './player_state';

export default class JumpingState {
    handleInput(controller, inputFlags) {
        return PlayerState.AIRBORNE;
    }

    handleUpdate(controller, inputFlags) {
        controller.jump();
    }
}
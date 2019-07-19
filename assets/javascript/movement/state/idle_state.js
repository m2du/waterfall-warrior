import GroundState from './ground_state';

export default class IdleState extends GroundState {
    constructor() {
        super();
    }

    handleInput(controller, inputFlags) {
        return super.handleInput(controller, inputFlags);
    }

    handleUpdate(controller, inputFlags) {
        controller.idle();
    }
}
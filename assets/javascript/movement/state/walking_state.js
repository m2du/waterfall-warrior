import GroundState from './ground_state';

export default class WalkingState extends GroundState {
    constructor() {
        super();
        this.name = "WALKING";
    }

    handleInput(controller, inputFlags) {
        return super.handleInput(controller, inputFlags);
    }

    handleUpdate(controller, inputFlags) {
        controller.walk(inputFlags);
    }
}
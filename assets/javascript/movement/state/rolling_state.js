import AirborneState from './airborne_state';

export default class RollingState extends AirborneState {
    constructor() {
        super();
        this.name = "ROLLING";
    }

    handleUpdate(controller, inputFlags) {
        if (controller.jumps > 0) {
            controller.jump(inputFlags);
        } else {
            controller.airborne(inputFlags);
        }
    }
}
import AirborneState from './airborne_state';

export default class RollingState extends AirborneState {
    constructor() {
        super();
        this.name = "ROLLING";
    }

    handleUpdate(controller, inputFlags) {
        if (inputFlags.jumpPressed) {
            controller.jump(inputFlags);
        } else {
            controller.airborne(inputFlags);
        }
        inputFlags.jumpPressed = false;
    }
}
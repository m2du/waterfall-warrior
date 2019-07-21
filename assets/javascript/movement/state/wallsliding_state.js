import PlayerState from './player_state';

export default class WallslidingState {
    constructor() {
        this.name = "WALLSLIDING";
    }

    handleInput(controller, inputFlags) {
        if (controller.isGrounded()) {
            return (inputFlags.dirX === 0) ? PlayerState.IDLE : PlayerState.WALKING;
        }

        if (controller.wallDirection() === 0) {
            return (controller.vel.y > 0) ? PlayerState.RISING : PlayerState.FALLING;
        }

        return PlayerState.WALLSLIDING;
    }

    handleUpdate(controller, inputFlags) {
        let action = WallSlideAction.None;
        let jump = inputFlags.jumpPressed && inputFlags.newJump;

        if (jump && inputFlags.dirX === -controller.wallDirection()) {
            action = WallSlideAction.Leap;
        } else if (jump && inputFlags.dirX === 0) {
            action = WallSlideAction.Drop;
        }

        controller.wallAction(inputFlags, action);
    }
}

const WallSlideAction = {
    Leap: "LEAP",
    Drop: "DROP",
    None: "NONE"
};
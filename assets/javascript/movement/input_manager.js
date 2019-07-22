export default class InputManager {
    constructor(game) {
        this.game = game;
        this.inputFlags = {
            dirX: 0,
            dirY: 0,
            jumpPressed: false,
            newJump: true
        }

        this.keydown = this.keydown.bind(this);
        this.keyup = this.keyup.bind(this);
        this.addListeners();
    }

    addListeners() {
        document.addEventListener('keydown', this.keydown);
        document.addEventListener('keyup', this.keyup);
    }

    keydown(e) {
        const inputFlags = this.inputFlags;

        if (e.keyCode === 37) {
            inputFlags.dirX = -1;
        } else if (e.keyCode === 39) {
            inputFlags.dirX = 1;
        }

        if (e.keyCode === 38) {
            inputFlags.dirY = 1;
        } else if (e.keyCode === 40) {
            inputFlags.dirY = -1;
        }

        if (e.keyCode === 32) {
            inputFlags.newJump = !inputFlags.jumpPressed;
            inputFlags.jumpPressed = true;
        }

        if (e.keyCode === 82) {
            this.game.reset();
        }
    }

    keyup(e) {
        const inputFlags = this.inputFlags;

        if (e.keyCode === 37 && inputFlags.dirX < 0) {
            inputFlags.dirX = 0;
        } else if (e.keyCode === 39 && inputFlags.dirX > 0) {
            inputFlags.dirX = 0;
        }

        if (e.keyCode === 38 && inputFlags.dirY > 0) {
            inputFlags.dirY = 0;
        } else if (e.keyCode === 40 && inputFlags.dirY < 0) {
            inputFlags.dirY = 0;
        }

        if (e.keyCode === 32) {
            inputFlags.jumpPressed = false;
            inputFlags.newJump = true;
        }
    }
}
export default class InputManager {
    constructor(player) {
        this.player = player;
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

        if (e.code === 'ArrowLeft') {
            inputFlags.dirX = -1;
        } else if (e.code === 'ArrowRight') {
            inputFlags.dirX = 1;
        }

        if (e.code === 'ArrowUp') {
            inputFlags.dirY = 1;
        } else if (e.code === 'ArrowDown') {
            inputFlags.dirY = -1;
        }

        if (e.code === 'Space') {
            inputFlags.newJump = !inputFlags.jumpPressed;
            inputFlags.jumpPressed = true;
        }
    }

    keyup(e) {
        const inputFlags = this.inputFlags;

        if (e.code === 'ArrowLeft' && inputFlags.dirX < 0) {
            inputFlags.dirX = 0;
        } else if (e.code === 'ArrowRight' && inputFlags.dirX > 0) {
            inputFlags.dirX = 0;
        }

        if (e.code === 'ArrowUp' && inputFlags.dirY > 0) {
            inputFlags.dirY = 0;
        } else if (e.code === 'ArrowDown' && inputFlags.dirY < 0) {
            inputFlags.dirY = 0;
        }

        if (e.code === 'Space') {
            inputFlags.jumpPressed = false;
            inputFlags.newJump = true;
        }
    }
}
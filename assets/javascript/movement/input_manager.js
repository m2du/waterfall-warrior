export default class InputManager {
    constructor(game, joystick) {
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

        if (joystick) {
            joystick.inputManager = this;

            const jumpBtn = document.getElementById('jump-btn');
            jumpBtn.addEventListener('touchstart', this.jumpBtnDown.bind(this), false);
            jumpBtn.addEventListener('touchend', this.jumpBtnUp.bind(this), false);

            const restartPrompt = document.querySelector('.restart-prompt.touch');
            restartPrompt.addEventListener('touchstart', this.touchRestart.bind(this), false);
        }
    }

    addListeners() {
        window.addEventListener('keydown', this.keydown);
        window.addEventListener('keyup', this.keyup);
    }

    keydown(e) {
        const inputFlags = this.inputFlags;

        if (e.keyCode === 37) {
            e.preventDefault();
            inputFlags.dirX = -1;
        } else if (e.keyCode === 39) {
            e.preventDefault();
            inputFlags.dirX = 1;
        }

        if (e.keyCode === 38) {
            e.preventDefault();
            inputFlags.dirY = 1;
        } else if (e.keyCode === 40) {
            e.preventDefault();
            inputFlags.dirY = -1;
        }

        if (e.keyCode === 32) {
            e.preventDefault();
            inputFlags.newJump = !inputFlags.jumpPressed;
            inputFlags.jumpPressed = true;
            return false;
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

    jumpBtnDown(e) {
        e.keyCode = 32;
        this.keydown(e);
    }

    jumpBtnUp(e) {
        e.keyCode = 32;
        this.keyup(e);
    }

    touchRestart(e) {
        e.keyCode = 82;
        this.keydown(e);
    }
}
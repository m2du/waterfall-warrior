import {
    GAME_WIDTH,
    GAME_HEIGHT,
    PLAYER_WIDTH,
    PLAYER_HEIGHT
} from './constants';
import { Time, lerp } from './util/util';
import Vector2 from './util/vector2';

import Player from './player';
import Block from './block';

import SoundManager from './util/sound_manager';

const BLOCK_SIZES = Block.BLOCK_SIZES;
const BLOCK_UNIT = Block.BLOCK_UNIT;
const BLOCK_SPEEDS = Block.BLOCK_SPEEDS;
const MAX_SCORES = 10;

export default class Game {
    constructor() {
        // get height display
        this.heightDisplay = document.getElementById('height-value');

        // get start prompt
        this.startPrompt = document.getElementById('start-prompt');

        // get end prompt and value displays
        this.endPrompt = document.getElementById('end-prompt');
        this.endHeightUI = document.getElementById('end-height');
        this.timeBonusUI = document.getElementById('time-bonus');
        this.finalScoreUI = document.getElementById('final-score');

        // set up audio
        this._audioSetup();

        // get highscore display
        this.scoreList = document.getElementById('highscore-list');

        // initialize high scores
        this.highscores = [];

        this._init();
    }

    checkCollisions(moveAmount) {
        this.blocks.forEach(block => block.willCollideWith(this.player, moveAmount));
    }

    draw(ctx) {
        const scrollOffset = this.scrollHeight - Game.BASE_SCROLL_HEIGHT;
        
        ctx.save();
        ctx.translate(0, scrollOffset);

        this.player.draw(ctx, scrollOffset);
        this.blocks.forEach(block => block.draw(ctx, scrollOffset));

        ctx.restore();

        if (this.scrollHeight < this.player.pos.y) {
            this.scrollHeight = Math.round(lerp(this.player.pos.y, this.scrollHeight, 100));
        }

        // update height value in UI
        this.heightDisplay.innerHTML = Math.floor(this.topHeight / 30) + 'm';
    }

    step() {
        if (!this.started && this.player.inputManager.inputFlags.jumpPressed) {
            this.startPrompt.style.visibility = 'hidden';
            this.startTime = new Date();
            this.started = true;
        }

        if (this.lastBlockTime < 1 / this.blocksPerSecond) {
            this.lastBlockTime += Time.deltaTime;
        } else if (this.started) {
            this._generateBlock();
            this.lastBlockTime = 0;
        }

        if (!this.gameover) {
            this.player.move();
        }

        this.blocks.forEach(block => block.move());

        // this.blocksPerSecond = (this.scrollHeight + 1200) / 1000

        if (this.topHeight < this.player.pos.y - 50) {
            this.topHeight = this.player.pos.y - 50;
            this.climbed = Math.floor(this.topHeight / 30);
        }
    }

    _generateBlock() {
        const scrollOffset = this.scrollHeight - Game.BASE_SCROLL_HEIGHT;
        const randomSize = Math.floor(Math.random() * BLOCK_SIZES.length);
        const size = BLOCK_SIZES[randomSize];

        let randCol;
        do {
            randCol = Math.floor(Math.random() * GAME_WIDTH / (BLOCK_UNIT * 2));
        } while (randCol == this.lastCol);
        this.lastCol = randCol;

        const randomX = randCol * (BLOCK_UNIT * 2) + size.x / 2

        const pos = new Vector2(
            randomX, GAME_HEIGHT + size.y + scrollOffset
        );

        const vel = new Vector2(
            0, - BLOCK_SPEEDS[Math.floor(Math.random() * BLOCK_SPEEDS.length)]
        );

        this.blocks.push(new Block({ game: this, size, pos, vel }));
    }

    isOffScreen(pos, size) {
        return pos + size + 30 < this.scrollHeight - Game.BASE_SCROLL_HEIGHT;
    }

    remove(obj) {
        if (obj instanceof Block) {
            this.blocks.splice(this.blocks.indexOf(obj), 1);
        }
    }

    end() {
        if (this.sfxOn) {
            this.hitSFX();
        }
        this.gameover = true;

        // set height score
        const heightScore = this.climbed * 100;
        this.endHeightUI.innerHTML = `${this.climbed}m x 100 = ${heightScore}`;
        
        // set time bonus
        const duration = new Date() - this.startTime;
        const benchmarkHeight = GAME_HEIGHT * (duration / 60000);
        const timeBonus = (this.topHeight > benchmarkHeight) ? this.topHeight - benchmarkHeight : 0;
        this.timeBonusUI.innerHTML = Math.round(timeBonus);
        
        // set final score
        const finalScore = Math.round(heightScore + timeBonus);
        this.finalScoreUI.innerHTML = finalScore;

        // display summary
        this.endPrompt.style.visibility = 'visible';

        // check if high score
        this._logScore(finalScore);
    }
    
    reset() {
        this._init();
        this.endPrompt.style.visibility = 'hidden';
    }

    _logScore(score) {
        if (this.highscores.length < MAX_SCORES) {
            this.highscores.push(score);
            this._refreshHighScores();
        } else if (this.highscores[MAX_SCORES - 1] < score) {
            this.highscores[MAX_SCORES - 1] = score;
            this._refreshHighScores();
        }
    }

    _refreshHighScores() {
        this.scoreList.innerHTML = '';

        this.highscores.sort((a, b) => {
            if (a < b) {
                return 1;
            } else if (a > b) {
                return -1;
            } else {
                return 0;
            }
        });

        this.highscores.forEach(score => {
            const scoreEl = document.createElement('li');
            scoreEl.innerHTML = score;
            this.scoreList.append(scoreEl);
        });
    }

    _init() {
        // create player
        this.player = new Player({
            game: this,
            size: new Vector2(PLAYER_WIDTH, PLAYER_HEIGHT)
        });

        // create floor
        const floor = new Block({
            game: this,
            pos: new Vector2(GAME_WIDTH / 2, 0),
            size: new Vector2(GAME_WIDTH, 50),
            vel: new Vector2(0, 0)
        });

        this.blocks = [floor];
        this.lastBlockTime = 0;
        this.blocksPerSecond = 1.5;

        // set start scroll height
        this.scrollHeight = Game.BASE_SCROLL_HEIGHT;

        // set start height
        this.topHeight = 0;
        this.climbed = 0;

        this.startPrompt.style.visibility = 'visible';
        this.started = false;
        this.gameover = false;
    }

    _audioSetup() {
        this.bgmOn = false;
        const bgmToggle = document.getElementById('bgmToggle');
        bgmToggle.addEventListener('click', () => {
            this.bgmOn = !this.bgmOn;
            if (this.bgmOn) {
                SoundManager.waterfallBGM.play();
                bgmToggle.classList.remove('muted');
            } else {
                SoundManager.waterfallBGM.pause();
                bgmToggle.classList.add('muted');
            }
        });

        this.sfxOn = true;
        const sfxToggle = document.getElementById('sfxToggle');
        sfxToggle.addEventListener('click', () => {
            this.sfxOn = !this.sfxOn;
            if (this.sfxOn) {
                sfxToggle.classList.remove('muted');
            } else {
                sfxToggle.classList.add('muted');
            }
        });
    }

    jumpSFX() {
        SoundManager.jumpSFX.play();
    }

    hitSFX() {
        SoundManager.hitSFX.play();
    }
}

Game.BASE_SCROLL_HEIGHT = GAME_HEIGHT / 3;
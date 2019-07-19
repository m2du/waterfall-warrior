import {GAME_WIDTH, GAME_HEIGHT} from './constants';
import Game from './game';
import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game-canvas');
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;

    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    const game = new Game();
    new GameView(game, ctx).start();
});
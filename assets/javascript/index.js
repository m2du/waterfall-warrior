import Game from './game';
import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game-canvas');
    canvas.width = Game.WIDTH;
    canvas.height = Game.HEIGHT;

    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    const game = new Game();
    new GameView(game, ctx).start();
});
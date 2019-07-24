import { GAME_HEIGHT } from '../constants';
import { Time } from '../util/util';
import Vector2 from '../util/vector2';
import BlockFormations from './block_formations';
import Block from './block';
import Game from '../game';

export default class FormationManager {
    constructor(game) {
        this.game = game;
        this.lastFormationTime = 0;
        this.formationDelay = 4.5;
    }

    monitorFormations() {
        if (this.lastFormationTime < this.formationDelay) {
            this.lastFormationTime += Time.deltaTime;
        } else if (this.game.started) {
            this._addFormation();
            this.lastFormationTime = 0;
        }
    }

    _addFormation() {
        const scrollOffset = this.game.scrollHeight - Game.BASE_SCROLL_HEIGHT;

        let randFormation;
        do {
            randFormation = Math.floor(Math.random() * BlockFormations.length);
        } while (randFormation == this.lastFormation);
        this.lastFormation = randFormation;

        BlockFormations[randFormation].forEach(options => {
            let block = new Block({
                game: this.game,
                size: options.size,
                vel: options.vel,
                pos: new Vector2(options.pos.x + options.size.x / 2, GAME_HEIGHT + options.size.y + scrollOffset + options.pos.y)
            });
            
            this.game.addBlock(block);
        });
    }
}
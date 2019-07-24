import { GAME_HEIGHT } from '../constants';
import { Time } from '../util/util';
import Vector2 from '../util/vector2';
import BlockFormations from './block_formations';
import Block from './block';
import Game from '../game';

const FORMATION_SPACING = Block.BLOCK_UNIT * 4;
export default class FormationManager {
    constructor(game) {
        this.game = game;
        this.lastFormationTime = 0;
        this.formationDelay = 4.5;
        this.topPos = new Vector2(0, 0);
    }

    monitorFormations() {
        if (this.game.started && this.topPos.y < GAME_HEIGHT + this.game.scrollHeight - Game.BASE_SCROLL_HEIGHT) {
            this._addFormation();
            this.lastFormationTime = 0;
        }
    }

    _addFormation() {
        const scrollOffset = this.game.scrollHeight - Game.BASE_SCROLL_HEIGHT + FORMATION_SPACING;

        let randFormation;
        do {
            randFormation = Math.floor(Math.random() * BlockFormations.length);
        } while (randFormation == this.lastFormation);
        this.lastFormation = randFormation;

        BlockFormations[randFormation].forEach(options => {
            let block = new Block({
                game: this.game,
                size: options.size,
                vel: {...options.vel},
                pos: new Vector2(options.pos.x + options.size.x / 2, GAME_HEIGHT + options.size.y + scrollOffset + options.pos.y)
            });
            this.topPos = block.pos;
            
            this.game.addBlock(block);
        });
    }
}
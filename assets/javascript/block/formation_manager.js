import { GAME_HEIGHT } from '../constants';
import Vector2 from '../util/vector2';
import { CenterFormations, StaircaseFormations } from './block_formations';
import Block from './block';
import Game from '../game';

const FORMATION_SPACING = Block.BLOCK_UNIT * 4;
export default class FormationManager {
    constructor(game) {
        this.game = game;
        this.lastFormationTime = 0;
        this.formationDelay = 4.5;
        this.topPos = new Vector2(0, 0);
        this.queue = [
            StaircaseFormations, CenterFormations
        ];
        this.queueIndex = 0;
    }

    monitorFormations() {
        if (this.game.started && this.topPos.y < GAME_HEIGHT + this.game.scrollHeight - Game.BASE_SCROLL_HEIGHT) {
            this._addFormation();
            this.lastFormationTime = 0;
        }
    }

    _addFormation() {
        const formations = this.queue[this.queueIndex];
        this.queueIndex = (this.queueIndex + 1) % this.queue.length;

        const scrollOffset = this.game.scrollHeight - Game.BASE_SCROLL_HEIGHT + FORMATION_SPACING;

        let randFormation = Math.floor(Math.random() * formations.length);

        formations[randFormation].forEach(options => {
            let block = new Block({
                game: this.game,
                size: options.size,
                vel: options.vel,
                pos: new Vector2(options.pos.x + options.size.x / 2, GAME_HEIGHT + options.size.y + scrollOffset + options.pos.y)
            });
            this.topPos = block.pos;
            
            this.game.addBlock(block);
        });
    }
}
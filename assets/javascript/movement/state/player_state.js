import IdleState from './idle_state';
import WalkingState from './walking_state';

export default function PlayerState() {};

PlayerState.IDLE = new IdleState();
PlayerState.WALKING = new WalkingState();
import IdleState from './idle_state';
import WalkingState from './walking_state';
import AirborneState from './airborne_state';
import JumpingState from './jumping_state';

export default function PlayerState() {};

PlayerState.IDLE = new IdleState();
PlayerState.WALKING = new WalkingState();
PlayerState.AIRBORNE = new AirborneState();
PlayerState.JUMPING = new JumpingState();
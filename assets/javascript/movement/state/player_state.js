import IdleState from './idle_state';
import WalkingState from './walking_state';
import JumpingState from './jumping_state';
import RisingState from './rising_state';
import FallingState from './falling_state';

export default function PlayerState() {};

PlayerState.IDLE = new IdleState();
PlayerState.WALKING = new WalkingState();
PlayerState.RISING = new RisingState();
PlayerState.FALLING = new FallingState();
PlayerState.JUMPING = new JumpingState();
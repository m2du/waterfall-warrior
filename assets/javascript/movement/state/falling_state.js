import AirborneState from './airborne_state';

export default class FallingState extends AirborneState {
    constructor() {
        super();
        this.name = "FALLING";
    }
}
import AirborneState from './airborne_state';

export default class RisingState extends AirborneState {
    constructor() {
        super();
        this.name = "RISING";
    }
}
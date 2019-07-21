export const Time = {
    deltaTime: 0
};

export const lerp = (target, current, deltaTime, scalar) => {
    let diff = goal - current;

    if (diff > deltaTime * scalar) {
        return current + deltaTime * scalar;
    } else if (diff < -dt * scalar) {
        return current - deltaTime * scalar;
    } else {
        return target;
    }
}
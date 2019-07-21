export const Time = {
    deltaTime: 0
};

export const lerp = (target, current, scalar) => {
    const deltaTime = Time.deltaTime;
    const diff = target - current;

    if (diff > deltaTime * scalar) {
        return current + deltaTime * scalar;
    } else if (diff < -deltaTime * scalar) {
        return current - deltaTime * scalar;
    } else {
        return target;
    }
}
export default class SoundManager {};
SoundManager.waterfallBGM = new Audio('./assets/audio/waterfall.mp3');
SoundManager.jumpSFX = new Audio('./assets/audio/jump.mp3');
SoundManager.hitSFX = new Audio('./assets/audio/hit.mp3');

SoundManager.waterfallBGM.ontimeupdate = function () {
    const buffer = .44;
    if (this.currentTime > this.duration - buffer) {
        this.currentTime = 0;
        this.play();
    }
};
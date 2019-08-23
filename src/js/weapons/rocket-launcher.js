class RocketLauncher extends Weapon {
    constructor(character) {
        super(character);
        this.shotInterval = 0.5;
        this.trailSize = this.projectileSize = 10;
        this.sprite = ROCKET_LAUNCHER;
        this.bulletSpeed = BLOCK_SIZE * 20;
        this.explodes = true;
        this.sound = rocketSound;
    }
}

import Phaser from "../lib/phaser";

export class PreloadScene extends Phaser.Scene {
    constructor() {
        super("preload-scene");
    }

    preload() {
        this.load.image("background", "assets/images/background.png");
        this.load.image("player", "assets/images/player.png");
        this.load.image("bullet", "assets/images/bullet.png");
        this.load.image("enemy", "assets/images/enemy.png");
    }

    create() {
        this.scene.start("game-scene");
    }
}
export class LoadAssets extends Phaser.Scene {

    constructor(){
        super("LoadAssets");
    }

    preload(){
        //Levels assets
        this.load.image("mossyFloating", "./assets/images/enviroments/Mossy_Cavern/Mossy - FloatingPlatforms.png");
        this.load.tilemapTiledJSON("testLevel", "./assets/levels/testingLevel.json");
        //player assets
        this.load.spritesheet("playerIdle", "./assets/images/characters/Mossy_Cavern/wizard_idle.png", {frameWidth:512, frameHeight: 512});
    }

    create(){
        console.log("Scene: LoadAssets Started!");
        this.scene.start("HomeScreen");
    }
}
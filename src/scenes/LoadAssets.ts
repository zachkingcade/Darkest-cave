export class LoadAssets extends Phaser.Scene {

    constructor(){
        super("LoadAssets");
    }

    preload(){
        this.load.image("mossyFloating", "./assets/images/enviroments/Mossy_Cavern/Mossy - FloatingPlatforms.png");
        this.load.tilemapTiledJSON("testLevel", "./assets/levels/testingLevel.json");
    }

    create(){
        console.log("Scene: LoadAssets Started!");
        this.scene.start("HomeScreen");
    }
}
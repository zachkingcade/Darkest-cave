export class LoadAssets extends Phaser.Scene {

    constructor(){
        super("LoadAssets");
    }

    preload(){
        //Levels assets
        this.load.image("mossyFloating", "./assets/images/enviroments/Mossy_Cavern/Mossy - FloatingPlatforms.png");
        this.load.image("mossyTileset", "./assets/images/enviroments/Mossy_Cavern/Mossy - TileSet.png");
        this.load.tilemapTiledJSON("testLevel", "./assets/levels/testingLevel.json");
        //player assets
        this.load.spritesheet("player-idle", "./assets/images/characters/Mossy_Cavern/wizard_idle.png", {frameWidth:512, frameHeight: 512});
        this.load.spritesheet("player-walk", "./assets/images/characters/Mossy_Cavern/wizard_walk.png", {frameWidth:512, frameHeight: 512});
        this.load.spritesheet("player-jump", "./assets/images/characters/Mossy_Cavern/wizard_jump.png", {frameWidth:512, frameHeight: 512});
        this.load.spritesheet("player-dash", "./assets/images/characters/Mossy_Cavern/wizard_dash.png", {frameWidth:512, frameHeight: 512});
        this.load.spritesheet("orb-loop", "./assets/images/items/orb-loop.png", {frameWidth:512, frameHeight: 512});
        this.load.spritesheet("portal", "./assets/images/items/portal.png", {frameWidth: 100, frameHeight: 100});
    }

    create(){
        console.log("Scene: LoadAssets Started!");
        this.scene.start("HomeScreen");
    }
}